import React from "react";
import "../style/Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import LinkContainer from "react-router-bootstrap/LinkContainer";

function Header() {
  return (
    <Navbar className="bg-body-tertiary mb-3" data-bs-theme="dark" fixed="top">
      <Container fluid>
        <NavbarCollapse className="justify-content-end">
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/product">
              <Nav.Link>Product</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
}

export default Header;
