import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Dashboard from "./Pages/Homepage";
import Playlist from "./Pages/playlist";
import "./App.css";

export default function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  // console.log(isLoggedIn);
  return (
    <div className="font-mono bg-slate-900">
      <Router>
        <Switch>
          <Route path="/create-playlist">
            {isLoggedIn ? (
              <Playlist />
            ) : (
              <Redirect exact from="/" to="/create-playlist" />
            )}
          </Route>
          <Route path="/">
            {!isLoggedIn ? <Dashboard /> : <Redirect to="/create-playlist" />}
          </Route>
          <Route exact path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
