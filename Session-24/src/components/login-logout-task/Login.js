import { useContext, useState } from "react";
import context from "./credentialcontext";

function Login() {
  var { setState } = useContext(context);

  const [login, setLogin] = useState({
    name: "",
    password: "",
  });

  const checkCredentail = () => {
    if (login.name === "kabir" && login.password === "kabir") {
      setState(true);
    } else {
      alert("Please Enter Proper Credentials");
    }
  };
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
        <input
          type="text"
          placeholder="User Name"
          onChange={(e) => {
            setLogin({
              ...login,
              name: e.target.value,
            });
          }}
        />
      </div>{" "}
      <br />
      <div>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setLogin({
              ...login,
              password: e.target.value,
            });
          }}
        />
      </div>
      <br />
      <button onClick={checkCredentail}>Login</button>
    </div>
  );
}

export default Login;
