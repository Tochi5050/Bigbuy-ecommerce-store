import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Ratings = ({ ratings, reviews }) => {
  return (
    <div>
      <div style={{ marginBottom: ".8rem", display: "flex" }}>
        <span>
          {ratings >= 1 ? (
            <FaStar />
          ) : ratings >= 0.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </span>
        <span>
          {ratings >= 2 ? (
            <FaStar />
          ) : ratings >= 1.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </span>
        <span>
          {ratings >= 3 ? (
            <FaStar />
          ) : ratings >= 2.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </span>
        <span>
          {ratings >= 4 ? (
            <FaStar />
          ) : ratings >= 3.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </span>
        <span>
          {ratings >= 5 ? (
            <FaStar />
          ) : ratings >= 4.5 ? (
            <FaStarHalfAlt />
          ) : (
            <FaRegStar />
          )}
        </span>
        <div style={{ marginLeft: ".5rem", marginTop: ".2rem" }}>
          {reviews > 1 ? `${reviews} reviews` : `${reviews} review`}
        </div>
      </div>
    </div>
  );
};

export default Ratings;
