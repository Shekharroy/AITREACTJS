import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { CustomProvider } from "./components/contextapi/context";
import { CustomCredentialProvider } from "./components/login-logout-task/credentialcontext";

ReactDOM.render(
  <CustomCredentialProvider>
    <App />
  </CustomCredentialProvider>,
  document.getElementById("root")
);
