import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {
  return (
    <div className="App">
      <div>     
      <h1 className = "Main-header">
          <strong><i>Andersson Reyna Personal Website</i></strong>
      </h1>
      <br></br>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="home">Andersson-Reyna</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="link">Link</Nav.Link>
            <NavDropdown title="Oskar" id="basic-nav-dropdown">
              <NavDropdown.Item href="oskar/aboutme">About Me</NavDropdown.Item>
              <NavDropdown.Item href="oskar/action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="oskar/action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="oskar/action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Steffany" id="basic-nav-dropdown">
              <NavDropdown.Item href="steffany/aboutme">About Me</NavDropdown.Item>
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
      </div>
      <div className="My-body">
          Here we have to show the content when user clicks the menu
        <ul>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
