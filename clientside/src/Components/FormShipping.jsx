import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
import { shippingToUser } from "../Redux/ApiSlice/cartSlice";

const FormShipping = () => {
  const { shippingAddress } = useSelector((state) => state.cart);
  const [address, setAddress] = useState(shippingAddress?.address);
  const [city, setCity] = useState(shippingAddress?.city);
  const [postalCode, setPostalCode] = useState(shippingAddress?.postalCode);
  const [country, setCountry] = useState(shippingAddress?.country);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formData = {
    address,
    city,
    postalCode,
    country,
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(shippingToUser({ ...formData }));

    navigate("/payment");
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="mt-3">Shipping</h1>
          </Col>
        </Row>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Address"
              style={{ width: "50%" }}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter City"
              style={{ width: "50%" }}
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Postal Code"
              style={{ width: "50%" }}
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Country"
              style={{ width: "50%" }}
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </Form.Group>

          <Button type="submit">Continue</Button>
        </Form>
      </Container>
    </div>
  );
};

export default FormShipping;
