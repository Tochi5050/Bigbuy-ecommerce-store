import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Header";
import {
  Container,
  Row,
  Card,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
  Image,
  Form,
} from "react-bootstrap";
import Message from "./Message";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { addToCart, removeFromCart } from "../Redux/ApiSlice/cartSlice";

const CartScreen = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCartHandler = (product, quantity) => {
    dispatch(addToCart({ ...product, quantity }));
  };

  const userInfo = useSelector((state) => state.userInfo);

  return (
    <div>
      <Header />
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1>Shopping Cart</h1>
          <ListGroup style={{ width: "20%", marginTop: "15px" }}>
            <ListGroup.Item>
              <Row style={{ marginLeft: "5px" }}>
                Subtotal (
                {cartItems.reduce(
                  (acc, cartQty) => acc + Number(cartQty.quantity),
                  0
                )}
                ) items
              </Row>
              <Row style={{ marginLeft: "5px" }}>
                $
                {cartItems.reduce(
                  (acc, cart) =>
                    acc + Number(cart.quantity) * Number(cart.price),
                  0
                )}
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button bg="primary">
                <Link to="/shipping" style={{ color: "white" }}>
                  Proceed to checkout
                </Link>
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </div>
        <Button
          variant="secondary"
          style={{ marginTop: "6px", marginBottom: "6px" }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Back to Products
          </Link>
        </Button>
        <Row>
          <Col md={8}>
            {cartItems.length == 0 ? (
              <Message>
                Cart is empty <Link to="/">Go back</Link>
              </Message>
            ) : (
              <ListGroup variant="flush">
                {cartItems.map((items) => (
                  <ListGroupItem>
                    <Row>
                      <Col md={3}>
                        <Image
                          src={items.image}
                          fluid
                          rounded
                          alt={items.name}
                        />
                      </Col>

                      <Col md={2} style={{ marginTop: "4rem" }}>
                        <Link to={`/product/${items._id}`}>{items.name}</Link>
                      </Col>

                      <Col md={2} style={{ marginTop: "4rem" }}>
                        ${items.price}
                      </Col>

                      <Col md={2} style={{ marginTop: "3.5rem" }}>
                        <Form.Control
                          as="select"
                          value={items.quantity}
                          style={{ width: "5rem" }}
                          onChange={(e) =>
                            addToCartHandler(items, Number(e.target.value))
                          }
                        >
                          {[...Array(items.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                      <Col md={2} style={{ marginTop: "4rem" }}>
                        <FaTrash
                          onClick={() => dispatch(removeFromCart(items._id))}
                        />
                      </Col>
                    </Row>
                  </ListGroupItem>
                ))}
              </ListGroup>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CartScreen;
