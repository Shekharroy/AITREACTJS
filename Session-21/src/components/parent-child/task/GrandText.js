import React from "react";

function GrandText(props) {
  //props = {info:""}
  return (
    <div>
      <h2>Grand Child</h2>
      <p>GrandChild: {props.info}</p>
    </div>
  );
}

export default GrandText;
