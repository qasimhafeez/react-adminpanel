import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
class SideBar extends Component {
  render() {
    return (
      <Fragment>
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link className="nav-link active" to="/admin/dashboard">
                  <span data-feather="home"></span>
                  Dashboard <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/dealers">
                  <span data-feather="file"></span>
                  Dealers
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin">
                  <span data-feather="file"></span>
                  Another Nav
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin">
                  <span data-feather="file"></span>
                  Another Nav
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin">
                  <span data-feather="file"></span>
                  Another Nav
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin">
                  <span data-feather="file"></span>
                  Another Nav
                </Link>
              </li>
            </ul>

            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
              <span>extras</span>
              <a className="d-flex align-items-center text-muted" href="#">
                <span data-feather="plus-circle"></span>
              </a>
            </h6>
            <ul className="nav flex-column mb-2">
              <li className="nav-item">
                <Link className="nav-link" to="/admin">
                  <span data-feather="file"></span>
                  Another Nav
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin">
                  <span data-feather="file"></span>
                  Another Nav
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default SideBar;
