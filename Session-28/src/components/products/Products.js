import { useState, useEffect } from "react";
import "./Products.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Products() {
  const [state, setState] = useState([]);

  useEffect(() => {
    getProductsData("electronics");
  }, []);

  //   useEffect(() => {
  //     document.title = state.length > 0 && state[0].category;
  //   }, [state]);

  const getProductsData = (categoryname) => {
    axios
      .get(`https://fakestoreapi.com/products/category/${categoryname}`)
      .then((res) => {
        console.log(res.data);
        document.title = res.data[0].category;
        setState(res.data);
      })
      .catch((error) => {
        alert("Error while getting the data");
        console.log(error);
      });
  };

  return (
    <div className="productContainer">
      <div className="left">
        <button
          onClick={() => {
            getProductsData("electronics");
          }}
        >
          Electronic
        </button>

        <button
          onClick={() => {
            getProductsData("jewelery");
          }}
        >
          Jewelery
        </button>

        <button
          onClick={() => {
            getProductsData("men's clothing");
          }}
        >
          Mens Clothing
        </button>

        <button
          onClick={() => {
            getProductsData("women's clothing");
          }}
        >
          Womens Clothing
        </button>
      </div>

      <div className="right">
        {state.length > 0 ? (
          <div className="products">
            {state.map((element) => {
              return (
                <div className="productcard">
                  <img
                    src={element.image}
                    width="100%"
                    height={200}
                    alt="product"
                  />
                  <h4>{element.title}</h4>
                  <p>${element.price}</p>
                  <Link to="/productdetails">
                    <button>Product Details</button>
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="noProducts">
            {" "}
            <h2>No Products To Display</h2>{" "}
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
