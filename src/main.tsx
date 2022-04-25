import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { keylistener } from "./listeners/advancedusage/gem";

window.onload = () => {
  console.log("loaded");
  window.addEventListener("keydown", keylistener);
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
