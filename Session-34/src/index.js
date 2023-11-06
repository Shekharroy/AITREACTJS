import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { CustomProvider } from "./components/contextapi/context";
import { BrowserRouter } from "react-router-dom";
import myStore from "./store/reduxstore";
import { Provider } from "react-redux";
import { CustomCredentialProvider } from "./components/login-logout-task/credentialcontext";

ReactDOM.render(
  <BrowserRouter>
    <CustomCredentialProvider>
      <Provider store={myStore}>
        <App />
      </Provider>
    </CustomCredentialProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
