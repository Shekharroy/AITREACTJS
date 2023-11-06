import "./App.css";

import Parent from "./components/parent-child/Parent";
import RandomUser from "./components/randomuser/RandomUser";

import Nav from "./components/nav/Nav";
import Input from "./components/parent-child/task/Input";
import A from "./components/contextapi/A";

function App() {
  return (
    <div className="App">
      <Nav />
      <A />
      {/* <RandomUser /> */}
      {/* <Parent /> */}
      {/* <Input /> */}
    </div>
  );
}

export default App;
