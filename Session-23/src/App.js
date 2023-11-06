import "./App.css";
import { useContext } from "react";
import Nav from "./components/nav/Nav";

import A from "./components/contextapi/A";
import Heading from "./components/children/Heading";
import Subheading from "./components/children/Subheading";
import mycontext from "./components/contextapi/context";
import Main from "./components/login-logout-task/Main";

function App() {
  // var contextdata = useContext(mycontext);
  // console.log(contextdata);
  return (
    <div className="App">
      <Nav />
      <Main />
      {/* <h2>{contextdata.name}</h2>
      <Heading></Heading> */}
    </div>
  );
}

export default App;
