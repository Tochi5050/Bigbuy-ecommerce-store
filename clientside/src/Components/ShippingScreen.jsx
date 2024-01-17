import React from "react";
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
  Nav,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link, useParams } from "react-router-dom";
import FormShipping from "./FormShipping";
import { useSelector } from "react-redux";
import PaymentDetails from "./PaymentDetails";

const ShippingScreen = () => {
  const userInfo = useSelector((state) => state.auth);

  const { shipping } = useParams();

  return (
    <div>
      <Header />
      <Container>
        <Row className="mt-3">
          <Col sm={3}>
            <Link
              style={{
                textDecoration: "none",
                color: `${userInfo != null ? "blue" : "black"}`,
              }}
            >
              Sign In
            </Link>
          </Col>

          <Col sm={3}>
            <Link
              style={{
                textDecoration: "none",
                color: `${shipping === "shipping" ? "blue" : "black"}`,
              }}
              to="/shipping"
            >
              Shipping
            </Link>
          </Col>

          <Col sm={3}>
            <LinkContainer
              to="/payment"
              style={{
                textDecoration: "none",
                color: `${shipping === "payment" ? "blue" : "black"}`,
              }}
            >
              <Nav.Link>Payment</Nav.Link>
            </LinkContainer>
          </Col>

          <Col sm={3}>
            <Link
              style={{
                textDecoration: "none",
                color: `${shipping === "order" ? "blue" : "black"}`,
              }}
            >
              Place Order
            </Link>
          </Col>
        </Row>
      </Container>
      {shipping === "shipping" && <FormShipping />}
      {shipping === "payment" && <PaymentDetails />}
    </div>
  );
};

export default ShippingScreen;
