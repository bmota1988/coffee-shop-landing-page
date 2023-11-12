import React from "react";
import ProductSlider from "./ProductSlider";
import "../style/Product.css";

function Product() {
  return (
    <div className="coffee-container">
      <h1>Our Products</h1>
      <ProductSlider />
    </div>
  );
}

export default Product;
