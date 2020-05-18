import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About'
import Steffy from './Steffy'
import Home from './Home'
import Oskar from './Oskar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function MyNav() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="home">Andersson-Reyna</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="link">Link</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Oskar" id="basic-nav-dropdown">
              <NavDropdown.Item href="/oskar">About Me</NavDropdown.Item>
              <NavDropdown.Item href="oskar/action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="oskar/action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="oskar/action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Steffany" id="basic-nav-dropdown">
              <NavDropdown.Item href="/steffy">About Me</NavDropdown.Item>
              <NavDropdown.Item href="action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="steffany/action3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="weddingdiary">Wedding Diary</Nav.Link>
          </Nav>

          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
        <Route path="/about" component={About}></Route>
        <Route path="/steffy" component={Steffy}></Route>
        <Route path="/oskar" component={Oskar}></Route>
        <Route path="/home" component={Home}></Route>
      </Router>
  );
}

export default MyNav;
