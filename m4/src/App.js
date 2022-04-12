import "./App.css";
import { Provider } from "react-redux";
import Handlesearch from "./Pages/Handlesearch";
import { store } from "../src/redux/store";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Trendingpage from "./Pages/Trendingpage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Link to="/">Home</Link>
        <Switch>
          <Route path="/Trending">
            <Trendingpage />
          </Route>
          <Route path="/" component={Handlesearch}></Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
