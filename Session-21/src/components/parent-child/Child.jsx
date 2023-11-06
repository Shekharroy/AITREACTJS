import React from "react";

function Child(props) {
  //props = {info:"Default Data"}
  return (
    <div>
      <h2>Child Component</h2>
      <p>Child Component : {props.info}</p>
    </div>
  );
}

export default Child;
