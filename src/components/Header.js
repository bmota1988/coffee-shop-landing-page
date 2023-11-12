import React from "react";
import "../style/Header.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import Figure from "react-bootstrap/Figure";
import LinkContainer from "react-router-bootstrap/LinkContainer";

function Header() {
  return (
    <Navbar className="bg-body-tertiary mb-3" data-bs-theme="dark" fixed="top">
      <Container fluid>
        <Navbar.Brand>
          <Figure>
            <Figure.Image width={50} alt="Logo" src="./logo192.png" />
          </Figure>
        </Navbar.Brand>
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
            <NavDropdown title="Social Media" id="offcanvasNavbarDropdown">
              <NavDropdown.Item href="https://www.facebook.com" target="_blank">
                Facebook
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.twitter.com" target="_blank">
                Twitter
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://www.instagram.com"
                target="_blank"
              >
                Instagram
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
}

export default Header;
