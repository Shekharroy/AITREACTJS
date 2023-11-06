import "./Nav.css";
// import mycontext from "../contextapi/context";
import { useContext } from "react";
import context from "../login-logout-task/credentialcontext";
function Nav() {
  const { state, setState } = useContext(context);
  return (
    <div className="Nav">
      <div className="Title">
        <h2>Ecommerce Application</h2>
      </div>

      <div className="Menu">
        <a href="">Home</a>
        <a href="">Products</a>
        <a href="">Profile</a>
        <a href="">Support</a>
        {state ? (
          <button
            onClick={() => {
              setState(false);
            }}
          >
            Logout
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default Nav;
