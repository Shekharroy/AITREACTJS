import "./App.css";
import { useState } from "react";

import Nav from "./components/nav/Nav";
import Image from "./components/lifecyle/Image";
import Text from "./components/lifecyle/Text";

function App() {
  const [showimage, setShowImage] = useState(true);
  return (
    <div className="App">
      <Nav />
      {showimage ? <Image /> : <Text />}

      <div style={{ marginTop: "30px" }}>
        <button
          onClick={() => {
            setShowImage(true);
          }}
        >
          Image Component
        </button>
        &nbsp;&nbsp;&nbsp;
        <button
          onClick={() => {
            setShowImage(false);
          }}
        >
          Text Component
        </button>
      </div>
    </div>
  );
}

export default App;
