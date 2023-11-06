import React from "react";
import "./NestedProducts.css";
import { Link, Outlet } from "react-router-dom";

function NestedProducts() {
  return (
    <div className="nestedProductsContainer">
      <div className="leftPanel">
        <Link to="electronics" className="linksStyles">
          Electronics
        </Link>

        <Link to="jewelery" className="linksStyles">
          Jewelery
        </Link>

        <Link to="mensc" className="linksStyles">
          Mens Clothing
        </Link>

        <Link to="womensc" className="linksStyles">
          Womens Clothing
        </Link>
      </div>

      <div className="rightPanel">
        <Outlet />
      </div>
    </div>
  );
}

export default NestedProducts;
