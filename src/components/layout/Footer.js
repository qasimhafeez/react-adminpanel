import React, { Fragment } from "react";
import { Navbar } from "react-bootstrap";

function Footer() {
  return (
    <Fragment>
      <Navbar
        bg="info"
        variant="dark"
        fixed="bottom"
        className="m-auto justify-content-center"
      >
        <footer className="text-white p-1" style={{ alignContent: "center" }}>
          Copyright &copy; {new Date().getFullYear()} Your Company
        </footer>
      </Navbar>
    </Fragment>
  );
}

export default Footer;
