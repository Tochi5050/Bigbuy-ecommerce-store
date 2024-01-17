import React from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const PaymentDetails = () => {
  const { shippingAddress } = useSelector((state) => state.cart);
  const { cartItems } = useSelector((state) => state.cart);

  console.log(shippingAddress);
  console.log(cartItems);

  return (
    <div>
      <Col>
        <Container>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h1 className="ms-0 fs-1 mt-4 me-2">Shipping</h1>
              <p>
                <span>Address: </span>
                {shippingAddress.address}, {shippingAddress.city}{" "}
                {shippingAddress.postalCode}, {shippingAddress.country}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h1 className="ms-0 fs-1 mt-4 me-2">Order Items</h1>
              <div>
                {cartItems.map((items) => (
                  <div>
                    <Row>
                      <Col sm={2}>
                        <img
                          src={items.image}
                          style={{ width: "100%", height: "auto" }}
                        />
                      </Col>

                      <Col className="my-4" sm={3} style={{}}>
                        {items.name}
                      </Col>

                      <Col sm={4} className="my-4">
                        {items.quantity} X ${items.price} = $
                        {items.price * items.quantity}
                      </Col>
                    </Row>
                  </div>
                ))}
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Container>
      </Col>

      <Col>
        <Container></Container>
      </Col>
    </div>
  );
};

export default PaymentDetails;
