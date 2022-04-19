import React from "react";
// import { Provider } from "react-redux";
// import { store } from "../src/redux/Store";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Dashboard from "./Pages/Homepage";
import Playlist from "./Pages/playlist";
import "./App.css";
// import Mainroom from "./Pages/Mainroom";
// import { useSelector } from "react-redux";
// import {useState} from 'react'

// export default function App() {
//   const isLoggedIn = localStorage.getItem("isLoggedIn");
//   // console.log(isLoggedIn);
//   return (
//     <Router>
//       <Switch>
//         <Route path="/create-playlist">
//           {isLoggedIn ? (
//             <Playlist />
//           ) : (
//             <Redirect exact from="/create-playlist" to="/" />
//           )}
//         </Route>
//         <Route exact path="/">
//           <Dashboard />
//         </Route>
//       </Switch>
//       {/* <div>
//         <Link to="/Homepage" component={Dashboard}></Link>
//       </div>
//        <Switch>
//          <Route path="/"></Route>
//          <Route></Route>
//        </Switch> */}
//     </Router>
//   );
// }

// export default function App() {
//   const isLoggedIn = useSelector((state) => state.account.accessToken);
//   // console.log(isLoggedIn);
//   return (
//     <Router>
//       <Switch>
//         <Route path="/">
//           {!isLoggedIn ? <Dashboard /> : <Redirect to="/create-playlist" />}
//         </Route>
//         <Route path="/create-playlist">
//           {isLoggedIn ? <Mainroom /> : <Redirect to="/" />}
//         </Route>
//       </Switch>
//     </Router>
//   );
// }

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
