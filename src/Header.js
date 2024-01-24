import React, { useState } from "react";
import Primarybutton from "./components/Primarybutton";
import Outlinebutton from "./components/Outlinebutton";
import Launchio from "./components/Launchio";
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap";
import "./Header.css";


export default function Header() {
  const [isNavOpen, setNavOpen] = useState(false);

  const handleToggle = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <Navbar
      expand="lg"
      className={`navbar-light ${isNavOpen ? "navbar-flex" : ""}`}
      style={{ width: "100%" ,
      position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding:'10px 80px 0px 80px',
        backgroundColor:'white',
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        zIndex:'10'}}
    >
      <Navbar.Brand href="#">
        <Launchio />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarSupportedContent" onClick={handleToggle} />
      <Navbar.Collapse id="navbarSupportedContent" className={`justify-content-between ${isNavOpen ? "show" : ""}`}>
        <Nav className="mr-auto">
          <Nav.Link href="#Home">Home</Nav.Link>
          <Nav.Link href="#">Link</Nav.Link>
          <Nav.Link href="#">Dropdown</Nav.Link>
          <Nav.Link href="#Features">Features</Nav.Link>
          <Nav.Link href="#Pricing">Pricing</Nav.Link>
          <Nav.Link href="#About">About</Nav.Link>
          <Nav.Link href="#Contact">Contact</Nav.Link>
        </Nav>
        <div>
        <Outlinebutton text={'Register'}/>
        <Primarybutton text={'Log in'}/>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
