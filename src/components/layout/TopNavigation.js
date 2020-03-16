import React, { Component, Fragment } from "react";
import { Navbar, Nav, Form, FormControl, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

class TopNavigation extends Component {
  render() {
    return (
      <Fragment>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="info "
          variant="dark"
          sticky="top"
        >
          <Navbar.Brand href="#home" className="mr-autp">
            Your Company
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Link style={{ color: "rgba(255,255,255,.5)" }} to="">
                  <i className="fas fa-search"></i>
                </Link>
              </Form>
              <NavDropdown
                title="Dropdown"
                id="collasible-nav-dropdown"
                alignRight
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link>
                <Link to="/login" style={{ color: "rgba(255,255,255,.5)" }}>
                  <i className="fas fa-sign-out-alt"></i>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Fragment>
    );
  }
}

export default TopNavigation;
