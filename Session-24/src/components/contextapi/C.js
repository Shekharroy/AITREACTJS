import { useContext } from "react";
import mycontext from "./context";
import D from "./D";

function C() {
  let info = useContext(mycontext);
  return (
    <div>
      <h2>
        C Component : <span style={{ color: "red" }}>{info}</span>
      </h2>
      <D />
    </div>
  );
}

export default C;
