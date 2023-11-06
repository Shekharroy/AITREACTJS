import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CustomProvider } from "./components/contextapi/context";

ReactDOM.render(
  <CustomProvider>
    <App />
  </CustomProvider>,
  document.getElementById("root")
);
