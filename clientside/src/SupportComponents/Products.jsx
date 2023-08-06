import React from "react";
import { Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

const Products = ({ product }) => {
  return (
    <div>
      <Card className="my-3 p-3 rounded">
        <Link to={`product/${product._id}`}>
          <Card.Img
            style={{
              objectFit: "contain",
              height: "18rem",
            }}
            variant="top"
            src={product.image}
          />
        </Link>

        <Card.Body>
          <Link to={`product/${product._id}`}>
            <Card.Title
              style={{
                height: "2.5em",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
              as="div"
            >
              {product.name}
            </Card.Title>
          </Link>

          <Card.Text as="h3">${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Products;
