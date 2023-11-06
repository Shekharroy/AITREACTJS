// import { useRef } from "react";

// function UseRef() {
//   let h2Ref = useRef(null); // current : null
//   let pRef = useRef(null);

//   const changeContentStyle = () => {
//     h2Ref.current.innerText = "Title Updated";
//     h2Ref.current.style.color = "green";

//     pRef.current.style.color = "red";
//     pRef.current.style.backgroundColor = "black";
//     pRef.current.style.padding = "30px";
//   };
//   return (
//     <div style={{ padding: "50px" }}>
//       <h2 ref={h2Ref}>useRef Hook</h2>
//       <p ref={pRef}>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi quasi
//         molestias dignissimos optio non libero nostrum sapiente officia
//         cupiditate veniam quae explicabo, perspiciatis, asperiores voluptas
//         voluptate incidunt placeat vero sed.
//       </p>
//       <button onClick={changeContentStyle}>Change Title</button>
//     </div>
//   );
// }

// export default UseRef;

import { useState, useRef } from "react";

function UseRef() {
  let [state, setState] = useState("Mumbai");
  let myRef = useRef("Kabir"); // myRef = {current:Kabir}
  //   let [info, setInfo] = useState("");

  //   var name;
  console.log("ckdsbckjdsbcdjsb");
  return (
    <div style={{ padding: "50px" }}>
      <h2
        onMouseLeave={() => {
          setState("Mumbai");
        }}
        onMouseEnter={() => {
          setState("Banglore");
        }}
      >
        useRef Concept : {state}
      </h2>

      <button
        onClick={() => {
          //   name = "Rohan";
          //   setInfo("Riya Sharma");
          myRef.current = "Sagar";
        }}
      >
        Change Data
      </button>

      <button
        onClick={() => {
          console.log(myRef.current);
        }}
      >
        Print
      </button>
    </div>
  );
}

export default UseRef;
