import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from "react";
import "./styles.css";
import ReactDOM from "react-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
