import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Profile from "./components/profile/Profile";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Home />
      {/* <div style={{ display: "flex", justifyContent: "space-evenly" }}> */}
      {/* <Header />
        <Main /> */}
      {/* <Profile
          name="Raj Sinha"
          image="https://media.licdn.com/dms/image/C4D03AQGxqdxHLEPhdA/profile-displayphoto-shrink_800_800/0/1517608970250?e=2147483647&v=beta&t=b7mHzKMwlX0XD5QL7_seKzJiSdH8d8XNxzVXe0W2hwA"
          id={101}
        />

        <Profile
          name="Ziya Khan"
          image="https://th.bing.com/th/id/OIP.HwMgp4ZE_haHjGY8xX5RwAHaFS?pid=ImgDet&rs=1"
          id={102}
        />

        <Profile
          name="Ayush Verma"
          image="https://i.pinimg.com/originals/b9/6d/76/b96d764d91fc70d9ee2643ae8bce1ffa.jpg"
          id={103}
        />
      </div> */}
    </div>
  );
}

export default App;
