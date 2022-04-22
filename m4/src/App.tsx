import "./App.css";
import Handlesearch from "./Pages/Handlesearch";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Trendingpage from "./Pages/Trendingpage";
import React from "react";

function App() {
  return (
    <div>
      <Router>
        <Link to="/">Home</Link>
        <br></br>
        <Switch>
          <Route path="/Trending">
            <Trendingpage />
          </Route>
          <Route path="/" component={Handlesearch}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
