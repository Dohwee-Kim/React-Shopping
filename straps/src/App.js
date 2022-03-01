import logo from './logo.svg';
import React, {useState} from 'react';
import {Nav, Navbar, Container, NavDropdown, Button} from 'react-bootstrap';
import './App.css';
import shoesData from './data.js';



function App() {

  
  let [shoes, shoesUpdate] = useState(shoesData);

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Jump!Over</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    <JumboTronSample></JumboTronSample>
      
      
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%"></img>
            <h4>{shoes[0].title}</h4>
            <p>${shoes[0].price}</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="100%"></img>
            <h4>{shoes[1].title}</h4>
            <p>${shoes[1].price}</p>
          </div>
          <div className="col-md-4">
          <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="100%"></img>
            <h4>{shoes[2].title}</h4>
            <p>${shoes[2].price}</p>
          </div>
        </div>
      </div>



    </div>
  );
}

function JumboTronSample(){
  return (
    <div className="background">
      <h1>20% Season off</h1>
      <h1>Hello, Worlds!</h1>
      <p>
        This is a simple hero unit
      </p>
      <p>
        <Button variant="primary">Learn more </Button>
      </p>
    </div>
  )
}

export default App;