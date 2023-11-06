import { useReducer } from "react";

const fnreducer = (state, action) => {
  //acton = {type:"city",data:"Banglore"}
  //implmenet logic to update state

  //Inside reducer function we can decide what type of operation
  //need to be performed on the state
  if (action.type === "name") {
    state = {
      ...state,
      name: action.data,
    };
  } else if (action.type === "previous") {
    state = {
      name: "Raj",
      city: "Banglore",
    };
  } else {
    state = {
      ...state,
      city: action.data,
    };
  }

  //   state = action.data;
  return state;
};

function UseReducerDemo() {
  let [state, dispatch] = useReducer(fnreducer, {
    name: "Raj",
    city: "Banglore",
  });
  return (
    <div style={{ padding: "50px" }}>
      <h2>
        Hey {state.name} from {state.city}
      </h2>
      <button
        onClick={() => {
          dispatch({ type: "name", data: "Rohan" });
        }}
      >
        Update Name
      </button>{" "}
      &nbsp;&nbsp;
      <button
        onClick={() => {
          dispatch({ type: "city", data: "Delhi" });
        }}
      >
        Update City
      </button>{" "}
      &nbsp;&nbsp;
      <button
        onClick={() => {
          dispatch({ type: "previous" });
        }}
      >
        Get Previous Data
      </button>
    </div>
  );
}

export default UseReducerDemo;
