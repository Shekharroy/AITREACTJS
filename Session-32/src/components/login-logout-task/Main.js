import { useContext } from "react";
import Login from "./Login";
import Home from "./Home";
import context from "./credentialcontext";

function Main() {
  const { state } = useContext(context);

  return <div>{state ? <Home /> : <Login />}</div>;
}

export default Main;
