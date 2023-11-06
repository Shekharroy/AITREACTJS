import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Profile from "./components/profile/Profile";

function App() {
  return (
    <div className="App">
      <h2>Welcome to React JS</h2>
      <div style={{ display: "flex" }}>
        {/* <Header />
        <Main /> */}
        <Profile />
        <Profile />
        <Profile />
      </div>
    </div>
  );
}

export default App;
