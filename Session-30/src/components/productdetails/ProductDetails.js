import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./ProductDetails.css";

function ProductDetails() {
  var { id } = useParams(); //{id:9,name:"sagar"}
  const [state, setState] = useState({
    id: 0,
    image: "",
    title: "",
    description: "",
    category: "",
    price: 0,
    rating: null,
  });

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setState(res.data);
      })
      .catch((error) => {
        console.log(error);
        alert("Error while accessing the data");
      });
  }, []);
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>
        {state.category.toUpperCase()} CATEGORY
      </h2>
      <div className="pdcontainer">
        <div className="leftPanel">
          <img src={state.image} width="100%" height="100%" />
        </div>
        <div className="rightPanel">
          <dl>
            <dt>
              <b>Product Title</b>
            </dt>
            <dd>{state.title}</dd>
            <dt>
              <b>Price</b>
            </dt>
            <dd>$ {state.price}</dd>
            <dt>
              <b>Description</b>
            </dt>
            <dd>{state.description}</dd>
            <dt>
              <b>Rating</b>
            </dt>
            <dd>{state.rating != null && state.rating.rate}</dd>
          </dl>
          <button>Add to Cart</button>&nbsp;&nbsp;&nbsp;
          <Link to="/products">
            {" "}
            <button>Back to Products</button>
          </Link>
        </div>
      </div>

      {/* <Link to="/products">Back to Products Page</Link> */}
    </div>
  );
}

export default ProductDetails;
