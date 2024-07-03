import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Browser } from "react-router-dom";
import store from "./app/store";
import { Provider } from "react-redux";

// ReactDOM.render(<App />, document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Browser>
      <Provider store={store}>
        <App />
      </Provider>
    </Browser>
  </React.StrictMode>
);
