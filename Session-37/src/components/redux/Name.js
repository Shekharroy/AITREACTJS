import React from "react";
import { useSelector } from "react-redux";

function Name() {
  var data = useSelector((storedata) => {
    return storedata.name;
  });
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Name Component</h2>
      <h4>{data}</h4>
    </div>
  );
}

export default Name;
