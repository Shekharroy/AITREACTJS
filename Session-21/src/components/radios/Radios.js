import React from "react";

function Radios({ filterData }) {
  return (
    <div
      style={{
        display: "flex",
        marginTop: "30px",
        justifyContent: "center",
      }}
    >
      <div>
        <input
          id="all"
          type="radio"
          name="gender"
          defaultChecked
          onChange={filterData}
        />
        ALL
      </div>
      <div>
        <input type="radio" id="male" name="gender" onChange={filterData} />
        Male
      </div>
      <div>
        <input id="female" type="radio" name="gender" onChange={filterData} />
        Female
      </div>
    </div>
  );
}

export default Radios;
