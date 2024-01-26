import React, { useState } from "react";
import Primarybutton from "./components/Primarybutton";
import Outlinebutton from "./components/Outlinebutton";
import Launchio from "./components/Launchio";
import {
  Navbar,
  Nav,
  Button,
  Form,
  FormControl,
  Dropdown,
} from "react-bootstrap";
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
      style={{
        width: "100%",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        padding: "10px 8% 12px 8%",
        backgroundColor: "white",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        zIndex: "10",
      }}
    >
      <Navbar.Brand href="#">
        <Launchio />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="navbarSupportedContent"
        onClick={handleToggle}
      />
      <Navbar.Collapse
        id="navbarSupportedContent"
        className={`justify-content-between ${isNavOpen ? "show" : ""}`}
      >
        <Nav className="mr-auto">
          <Nav.Link href="#Home">Home</Nav.Link>
          <Nav.Link href="#">Link</Nav.Link>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic"  style={{ backgroundColor:'white', color:'grey', border:'none' }}>
              Dropdown
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Nav.Link href="#Features">Features</Nav.Link>
          <Nav.Link href="#Pricing">Pricing</Nav.Link>
          <Nav.Link href="#About">About</Nav.Link>
          <Nav.Link href="#Contact">Contact</Nav.Link>
        </Nav>
        <div>
          <Outlinebutton text={"Register"} />
          <Primarybutton text={"Log in"} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
