import "./Nav.css";
import mycontext from "../contextapi/context";
import { useContext } from "react";
function Nav() {
  var data = useContext(mycontext);
  return (
    <div className="Nav">
      <div className="Title">
        <h2>Ecommerce Application : {data.city}</h2>
      </div>

      <div className="Menu">
        <a href="">Home</a>
        <a href="">Products</a>
        <a href="">Profile</a>
        <a href="">Support</a>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Nav;
