import { useState } from "react";
import axios from "axios";
function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const userRegister = () => {
    axios
      .post("http://localhost:6060/newuserreact", user)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        alert("Something went wrong");
        console.log(err);
      });
  };
  return (
    <div>
      <h2>User Registration</h2>
      <div>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => {
            setUser({
              ...user,
              name: e.target.value,
            });
          }}
        />
      </div>
      <br />
      <div>
        <input
          type="text"
          placeholder="email"
          onChange={(e) => {
            setUser({
              ...user,
              email: e.target.value,
            });
          }}
        />
      </div>
      <br />
      <div>
        <input
          type="phone"
          placeholder="phone"
          onChange={(e) => {
            setUser({
              ...user,
              phone: e.target.value,
            });
          }}
        />
      </div>
      <br />
      <button onClick={userRegister}>Register </button>
    </div>
  );
}

export default Register;
