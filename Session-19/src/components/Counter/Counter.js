import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  //   var countValue = 0;

  const increaseCount = () => {
    setCount(count + 1);
    // countValue = countValue + 1;
    // console.log(countValue);
  };

  return (
    <div>
      <h2>Counter App</h2>
      <p>
        Count Value is : <span style={{ fontSize: "22px" }}>{count}</span>
      </p>
      <button onClick={increaseCount}>Increase Count</button>
    </div>
  );
}

export default Counter;
