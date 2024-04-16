import React from "react";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { PaystackButton } from "react-paystack";

const PaymentDetails = () => {
  const { shippingAddress } = useSelector((state) => state.cart);
  const { cartItems } = useSelector((state) => state.cart);
  const cart = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);
  const price = parseInt(cart.totalPrice);
  const publicKey = "pk_test_3472fc25785cd8ca1bdb89cd1f021878a185de08";
  const name = userInfo.res.name;
  const email = userInfo.res.email;

  console.log(publicKey);

  const props = {
    email,
    amount: price,
    metadata: {
      name,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Sorry to see you go"),
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3 className="ms-0 fs-1 mt-4 me-2">Ship to</h3>
                <p>
                  <span>Address: </span>
                  {shippingAddress.address}, {shippingAddress.city}{" "}
                  {shippingAddress.postalCode}, {shippingAddress.country}
                </p>
                <p>
                  <span>Name: </span>
                  {userInfo.res.name}
                </p>
                <p>
                  <span>Email: </span>
                  {userInfo.res.email}
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
          </Col>

          <Col>
            <ListGroup className="mt-4 w-75 ml-3">
              <ListGroup.Item>
                <h3>Order Summary</h3>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Cost Price:</Col>
                  <Col>{`$${cart.totalPrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Shipping:</Col>
                  <Col>{`$${cart.shippingPrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Tax:</Col>
                  <Col>{`$${cart.taxAmount
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Total:</Col>
                  <Col>{`$${cart.totalAmountPayable
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <PaystackButton {...props} />
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PaymentDetails;
