import "./App.css";
import Counter from "./components/Counter/Counter";
import Image from "./components/image/Image";
import Profile from "./components/profile/Profile";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import List from "./components/list/List";
import Userlist from "./components/userlist/Userlist";
import UserAxios from "./components/axios/UserAxios";
import Login from "./components/login/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <div className="App">
      <Register />
      {/* <Login />
      <UserAxios /> */}
      {/* <Userlist /> */}
      {/* <List /> */}
      {/* <Header />
      <Footer /> */}
      {/* <Profile /> */}
      {/* <Image />
      <Counter /> */}
    </div>
  );
}

export default App;
