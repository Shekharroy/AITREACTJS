var initialState = {
  electronics: [],
  jewelery: [],
  mensClothing: [],
  womensClothing: [],
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
  }
  return state;
};

export default productsReducer;
