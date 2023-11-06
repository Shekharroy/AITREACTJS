import { useState } from "react";
import axios from "axios";

function Login() {
  const [state, setState] = useState({
    name: "",
    password: "",
  });

  const login = () => {
    axios
      .post("http://localhost:7070/newuser", state)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h2>Login Component</h2>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setState({
              ...state,
              name: e.target.value,
            });
          }}
        />
      </div>
      <div>
        <input
          type="password"
          onChange={(e) => {
            setState({
              ...state,
              password: e.target.value,
            });
          }}
        />
      </div>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
