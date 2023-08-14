import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../Redux/ApiSlice/product";
import Products from "../SupportComponents/Products";
import { Row, Col } from "react-bootstrap";
import Loader from "../Components/Loader";

const HomeScreen = () => {
  const { data: product, isLoading, error } = useGetProductsQuery();

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <Row>
          {product?.product.map((productItem) => (
            <Col key={productItem._id} sm={12} md={6} lg={4} xl={3}>
              <Products product={productItem} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default HomeScreen;
