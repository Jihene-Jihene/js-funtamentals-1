import React from "react";
import product from "./product";

const Price = () => {
  return <h4>${product.price.toFixed(2)}</h4>;
};

export default Price;
