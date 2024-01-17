import React from "react";
import { Badge, Navbar, Container, Nav } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import NavItem from "react-bootstrap/NavItem";
import NavLink from "react-bootstrap/NavLink";
import { useSelector, useDispatch } from "react-redux";
import { userState } from "../Redux/ApiSlice/createSlice";
import { useLogoutUserMutation } from "../Redux/ApiSlice/logoutUser";
import { logOut } from "../Redux/ApiSlice/createSlice";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Loader from "./Loader";

const Header = () => {
  const userInfo = useSelector(userState);

  const { cartItems } = useSelector((state) => state.cart);

  const [logoutUser, { isLoading }] = useLogoutUserMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogoutUser = async (e) => {
    e.preventDefault();
    try {
      const res = await logoutUser().unwrap;

      dispatch(logOut());

      navigate("/user");
    } catch (err) {
      toast.err(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <ToastContainer />
      <Navbar expand="lg" variant="light" bg="light" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <strong>BigBuy</strong>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <FaShoppingCart /> Cart
                  <Badge bg="primary" style={{ marginLeft: "2px" }} pill>
                    {cartItems.reduce(
                      (acc, cartQty) => acc + Number(cartQty.quantity),
                      0
                    )}
                  </Badge>
                </Nav.Link>
              </LinkContainer>

              {userInfo ? (
                <Dropdown as={NavItem}>
                  <Dropdown.Toggle as={NavLink}>
                    {userInfo.res.name}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Profile</Dropdown.Item>
                    <Dropdown.Item onClick={handleLogoutUser}>
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                  {isLoading && <Loader />}
                </Dropdown>
              ) : (
                <LinkContainer to="/user">
                  <Nav.Link>
                    <FaUser /> User
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
