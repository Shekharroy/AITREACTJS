import { useState } from "react";
import Text from "./Text";

function Input() {
  const [state, setState] = useState("");
  const getdata = (event) => {
    setState(event.target.value);
  };
  return (
    <div style={{ padding: "100px" }}>
      <h2>Input Component</h2>
      <label>Enter Text</label> :
      <input type="text" onChange={getdata} /> <br />
      <br />
      <hr />
      <Text data={state} />
    </div>
  );
}

export default Input;
