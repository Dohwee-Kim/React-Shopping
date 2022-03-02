import logo from './logo.svg';
import React, {useState} from 'react';
import {Nav, Navbar, Container, NavDropdown, Button} from 'react-bootstrap';
import './App.css';
import shoesData from './data.js';
import { render } from 'react-dom';
import {Link, Route, Switch} from 'react-router-dom'; //다 사실 HTML 태그들임 !


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
          {
            shoesData.map((element, i)=>{
              return <RenderShoesUI shoes={shoes[i]} key={i}/>
            })
          }
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

function RenderShoesUI(props){
    return (
      <div className="col-md-4">
        <img src= {props.shoes.img_src} width="100%"/>
        <h4>{props.shoes.title}</h4>
        <p>${props.shoes.price}</p>
      </div>
    )
}

export default App;