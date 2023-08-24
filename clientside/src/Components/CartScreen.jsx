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

const CartScreen = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div>
      <Header />
      <Container>
        <h1>Shopping Cart</h1>
        <Button
          variant="secondary"
          style={{ marginTop: "6px", marginBottom: "6px" }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Back to Products
          </Link>
        </Button>
        <Row>
          <Col>
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
                        >
                          {[...Array(items.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
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
