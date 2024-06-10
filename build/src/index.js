import React from "react";
import App from "./App";
import "./index.less";
import ReactDOM from "react-dom/client";
var el = document.getElementById("root");
var root = ReactDOM.createRoot(el);
root.render(React.createElement(React.StrictMode, null,
    React.createElement(App, null)));
