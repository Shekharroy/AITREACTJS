import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [state, setState] = useState("Default Data");
  return (
    <div>
      <h2>Parent Component</h2>
      <Child info={state} />
    </div>
  );
}

export default Parent;
