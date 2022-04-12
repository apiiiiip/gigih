import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Home";
import About from "./About";

function BasicExample(){
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
    </Router>
  );
}

export default BasicExample;