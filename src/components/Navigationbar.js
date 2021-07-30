import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigationbar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      sticky="top"
      className="border-theme"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <div className="text-uppercase">FARZAD BANAEE</div>
          <div className="text-muted" style={{ fontSize: "0.8rem" }}>
            composer | sound artist
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown
              bg="dark"
              variant="dark"
              title="Projects"
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item as={Link} to="#Music">
                Music
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#Installations">
                Installations
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="#Kamancheh">
                Kamancheh
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/about-me">
              About Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
