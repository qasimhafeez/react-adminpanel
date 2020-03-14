import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Setting up redux
import { Provider } from "react-redux";
import store from "./store";
// Loading components
import Login from "./components/login/Login";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
