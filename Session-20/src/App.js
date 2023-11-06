import "./App.css";

import RandomUser from "./components/randomuser/RandomUser";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <RandomUser />
    </div>
  );
}

export default App;
