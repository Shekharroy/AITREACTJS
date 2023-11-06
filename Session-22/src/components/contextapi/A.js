import { useState } from "react";
import B from "./B";

import mycontext from "./context";

function A() {
  const [state, setState] = useState("Sagar");
  const changedata = () => {
    setState("Kabir");
  };
  return (
    <div style={{ padding: "50px" }}>
      <h2>A Component</h2>
      <button
        onClick={() => {
          changedata();
        }}
      >
        Change data
      </button>

      <mycontext.Provider value={state}>
        <B />
      </mycontext.Provider>
    </div>
  );
}

export default A;
