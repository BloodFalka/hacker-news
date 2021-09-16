import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import store from "./redux/store";
import { Provider } from "react-redux";

import "./index.scss";
import fixVh from "./utils/fixVh";

import { BrowserRouter as Router } from "react-router-dom";

fixVh();

ReactDOM.render(
  <Provider store={store}>
    <Router basename="/hacker-news">
      <App />
    </Router>
  </Provider>,
  document.querySelector("#root")
);
