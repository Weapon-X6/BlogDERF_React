import React from "react";
import ReactDOM from "react-dom";
//import {* as serviceWorker} from "./service-worker";
import "./index.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import App from "./App";
import Header from "./components/Header";
import Footer from "./components/Footer";

const routing = (
  <Router>
    <React.StrictMode>
      <Header />
      <hr />
      <Switch>
        <Router exact path="/" component={App} />
      </Switch>
      <hr />
      <Footer />
    </React.StrictMode>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// https://bit.ly/CRA-PWA
//serviceWorker.unregister();
