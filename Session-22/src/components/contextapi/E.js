import { useContext } from "react";
import mycontext from "./context";

function E() {
  let data = useContext(mycontext);
  return (
    <div>
      <h2>E Component</h2>
      <p style={{ fontSize: "32px", color: "green" }}>Data : {data}</p>
    </div>
  );
}

export default E;
