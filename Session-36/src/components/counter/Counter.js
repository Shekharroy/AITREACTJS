import { useReducer } from "react";

const countReducer = (state, action) => {
  //action = {type:""}
  if (action.type === "INC") {
    state = {
      count: state.count + 5,
    };
  } else if (action.type === "DEC") {
    state = {
      count: state.count - 1,
    };
  } else {
    state = { count: 0 };
  }

  return state;
};

function Counter() {
  let [state, dispatch] = useReducer(countReducer, {
    count: 0,
  });
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>
        Count Value is{" "}
        <span style={{ color: "black", fontSize: "32px" }}>{state.count}</span>
      </h2>
      <button
        onClick={() => {
          dispatch({ type: "INC" });
        }}
      >
        Inc Count
      </button>
      &nbsp;&nbsp;&nbsp;
      <button
        onClick={() => {
          dispatch({
            type: "DEC",
          });
        }}
      >
        Dec Count
      </button>
      &nbsp;&nbsp;&nbsp;
      <button
        onClick={() => {
          dispatch({ type: "CLEAR" });
        }}
      >
        Clear
      </button>
    </div>
  );
}

export default Counter;
