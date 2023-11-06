import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { productsActionCreator } from "../../Actions/productsAction";

function Cart() {
  const dispatch = useDispatch();
  let cartData = useSelector((store) => {
    return store.productsReducer.cart;
  });

  const removeproduct = (product) => {
    dispatch(productsActionCreator("removefromcart", product));
  };

  return (
    <div>
      {cartData.length > 0 ? (
        <div>
          {cartData.map((product) => {
            return (
              <div
                style={{
                  margin: "100px",
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <img src={product.image} width={150} height={150} />
                <h4>{product.title}</h4>
                <p>$ {product.price}</p>
                <p>{product.category}</p>
                <button
                  style={{ width: "100px", height: "30px" }}
                  onClick={() => {
                    removeproduct(product);
                  }}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <h1
          style={{
            color: "red",
            fontSize: "40px",
            textAlign: "center",
            marginTop: "150px",
          }}
        >
          Nothing Added in the Cart
        </h1>
      )}
    </div>
  );
}

export default Cart;
