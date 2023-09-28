import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

//CSS Styles
import "./styles/sass/main.css";

//Components



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      
      <App />

    </Router>
  </React.StrictMode>
);
