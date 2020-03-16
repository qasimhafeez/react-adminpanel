import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
// Setting up redux
import { Provider } from "react-redux";
import store from "./store";
// Loading components
import Login from "./components/login/Login";
import Admin from "./admin/Admin";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
        </Switch>
        <Switch>
          <Route exact path="/admin" component={Admin} />
        </Switch>
        <Switch>
          <Route exact path="/admin/dealers" component={Admin} />
          <Route exact path="/admin/dashboard" component={Admin} />
          <Redirect exact from="/" to="/login" component={Admin} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
