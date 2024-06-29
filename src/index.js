import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Browser } from "react-router-dom";


// ReactDOM.render(<App />, document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Browser>
      <App />
    </Browser>
  </React.StrictMode>
);
