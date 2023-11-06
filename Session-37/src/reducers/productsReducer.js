var initialState = {
  electronics: [],
  jewelery: [],
  mensClothing: [],
  womensClothing: [],
  cart: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "electronics":
      state = {
        ...state,
        electronics: action.payload,
      };
      break;
    case "jewelery":
      state = {
        ...state,
        jewelery: action.payload,
      };
      break;
    case "addtocart":
      state = {
        ...state,
        cart: [...state.cart, action.payload],
      };
      break;
    case "removefromcart":
      state = {
        ...state,
        cart: state.cart.filter((product) => product.id != action.payload.id),
      };
  }
  return state;
};

export default productsReducer;
