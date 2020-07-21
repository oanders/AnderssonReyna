import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";

function MyNav() {
  return (
    <div class="fixed-top">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Andersson-Reyna</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Oskar" id="basic-nav-dropdown">
              <NavDropdown.Item href="/oskar">About Me</NavDropdown.Item>
              <NavDropdown.Item href="oskar/action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="oskar/action/3.3">
                Something
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="oskar/action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Steffany" id="basic-nav-dropdown">
              <NavDropdown.Item href="/steffy">About Me</NavDropdown.Item>
              <NavDropdown.Item href="action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="steffany/action3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/weddingdiary">Wedding Diary</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default MyNav;
