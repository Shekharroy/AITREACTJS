import { useState, useEffect } from "react";
import "./Products.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { productsActionCreator } from "../../Actions/productsAction";
import { useDispatch, useSelector } from "react-redux";
import myStore from "../../store/reduxstore";

function Products() {
  const [state, setState] = useState("electronics");
  const disptach = useDispatch();

  let productsData = useSelector((storedata) => {
    return storedata.productsReducer[state];
  });

  useEffect(() => {
    getProductsData("electronics");
  }, []);

  const getProductsData = (categoryname) => {
    if (myStore.getState().productsReducer[categoryname].length != 0) {
      setState(categoryname);
    } else {
      axios
        .get(`https://fakestoreapi.com/products/category/${categoryname}`)
        .then((res) => {
          alert("Sent Request");
          console.log(res.data);
          setState(res.data[0].category);
          disptach(productsActionCreator(res.data[0].category, res.data));
        })
        .catch((error) => {
          alert("Error while getting the data");
          console.log(error);
        });
    }
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
        {productsData.length > 0 ? (
          <div className="products">
            {productsData.map((element) => {
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
                  <Link to={`/productdetails/${element.id}`}>
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
