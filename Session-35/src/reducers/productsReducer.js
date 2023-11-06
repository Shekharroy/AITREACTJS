var initialState = {
  electronics: [],
  jewelery: [],
  mensClothing: [],
  womensClothing: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "electronics":
      console.log(state);
      state = {
        ...state,
        electronics: action.payload,
      };
  }
  return state;
};

export default productsReducer;
