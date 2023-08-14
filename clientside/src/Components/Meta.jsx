import React from "react";
import { Helmet } from "react-helmet-async";

const Meta = ({ title, description, keyword }) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keyword" content={keyword} />
      </Helmet>
    </div>
  );
};

Meta.defaultProps = {
  title: "Bighbuy ecommerce store",
  description: "Buy premium medical devices and equipment online",
  keyword:
    "medical equipment, medical devices in nigeria, medical devices price in nigeria",
};

export default Meta;
