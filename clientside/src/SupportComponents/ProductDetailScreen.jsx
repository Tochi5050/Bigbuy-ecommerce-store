import React from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "../Components/Loader";
import { useGetProductDetailsQuery } from "../Redux/ApiSlice/productDetails";
import Message from "../Components/Message";
import Meta from "../Components/Meta";
import { useState } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  Form,
  ListGroup,
  Image,
  ListGroupItem,
} from "react-bootstrap";
import Header from "../Components/Header";
import Rating from "../SupportComponents/Ratings";
import { addToCart } from "../Redux/ApiSlice/cartSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const ProductDetailScreen = () => {
  const { id: productDetailsId } = useParams();

  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    data: product,
    isLoading,
    error,
  } = useGetProductDetailsQuery(productDetailsId);

  const handleClick = () => {
    dispatch(addToCart({ ...product, quantity }));

    navigate("/cart");
  };

  return (
    <div>
      <Header />
      <Container>
        <Button
          variant="secondary"
          style={{ marginTop: "6px", marginBottom: "6px" }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Go Back
          </Link>
        </Button>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message>{error?.data?.message || error.error}</Message>
        ) : (
          <>
            <Row>
              <Col md={6}>
                <Image src={product.image} fluid alt={product.name} />
              </Col>
              <Col md={3}>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h3>{product.name}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Rating
                      ratings={product.rating}
                      reviews={product.numReviews}
                    />
                  </ListGroup.Item>
                  <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                  <ListGroup.Item>
                    Description: {product.description}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col md={3}>
                <Card>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <Row>
                        <Col>Price:</Col>
                        <Col>${product.price}</Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col>Status:</Col>
                        <Col>
                          {product.countInStock > 0
                            ? "In stock"
                            : "Out of stock"}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col>Qty:</Col>
                        <Col>
                          {product.countInStock > 0 && (
                            <Form.Control
                              as="select"
                              value={quantity}
                              onChange={(e) => setQuantity(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </Form.Control>
                          )}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Button
                        variant={
                          product.countInStock <= 0 ? "secondary" : "primary"
                        }
                        style={{ marginTop: "6px" }}
                        disabled={product.countInStock <= 0 ? true : false}
                        onClick={handleClick}
                      >
                        Add to cart
                      </Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </div>
  );
};

export default ProductDetailScreen;
