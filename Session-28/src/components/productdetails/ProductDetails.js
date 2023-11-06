import React from "react";
import { Link } from "react-router-dom";

function ProductDetails() {
  return (
    <div>
      <h2 style={{ color: "green" }}>Product Details</h2>
      <p style={{ color: "red", fontSize: "32px" }}>
        Need to implement Component
      </p>

      <Link to="/products">Back to Products Page</Link>
    </div>
  );
}

export default ProductDetails;
