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
              title="PROJECTS"
              id="projects-dropdown"
            >
              <NavDropdown.Item as={Link} to="#Music">
                MUSIC
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#Installations">
                INSTALLATION
              </NavDropdown.Item>
              <NavDropdown.Divider style={{borderColor:"#d2d2d2"}}/>
              <NavDropdown.Item as={Link} to="#Kamancheh">
                KAMANCHEH
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              as={Link}
              to="/about-me"
              bg="dark"
              variant="dark"
              title="ABOUT ME"
              id="about-dropdown"
            >
              <NavDropdown.Item as={Link} to="/biography">
                BIOGRAPHY
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#contact">
                CONTACT
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
