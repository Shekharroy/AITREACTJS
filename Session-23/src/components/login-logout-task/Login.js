import React from "react";

function Login() {
  return (
    <div
      style={{
        width: "300px",
        boxShadow: "0 0 10px black",
        padding: "20px",
        margin: "100px auto",
        textAlign: "center",
      }}
    >
      <h2>Login Form</h2>
      <div>
        <input type="text" placeholder="User Name" />
      </div>{" "}
      <br />
      <div>
        <input type="password" placeholder="Password" />
      </div>
      <br />
      <button>Login</button>
    </div>
  );
}

export default Login;
