let initialData = {
  name: "",
};
const myReducer = (storedata = initialData, action) => {
  if (action.type === "NAME") {
    storedata = {
      name: action.info,
    };
  }
  return storedata;
};

export default myReducer;
