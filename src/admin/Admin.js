import React, { Component, Fragment } from "react";
import { Link, Switch, Route } from "react-router-dom";
// Loading components
import TopNavigation from "../components/layout/TopNavigation";
import SideBar from "../components/layout/SideBar";
import Footer from "../components/layout/Footer";
import Dashboard from "../components/dashboard/Dashboard";
import Dealers from "../components/dealers/Dealers";

class Admin extends Component {
  render() {
    return (
      <Fragment>
        <TopNavigation />
        <div className="container-fluid">
          <div className="row">
            <SideBar />
            <Switch>
              <Route exact path="/admin/dashboard" component={Dashboard} />
            </Switch>
            <Switch>
              <Route exact path="/admin/dealers" component={Dealers} />
            </Switch>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default Admin;
