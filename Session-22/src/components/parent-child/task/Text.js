import React from "react";
import GrandText from "./GrandText";

function Text(props) {
  //props = {data:"------"}
  return (
    <div>
      <h2>Text Component</h2>
      <p></p>
      <br />
      <hr />
      <GrandText info={props.data} />
    </div>
  );
}

export default Text;
