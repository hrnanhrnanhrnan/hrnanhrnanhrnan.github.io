import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Container } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export const NavbarComponent = (props) => {
    return (
        <Navbar display="flex"  bg="dark" variant="dark" expand="sm" className="pb-3">
        <Container>
          <Navbar.Brand>Robin<span id="easter-1" onClick={props.onclick} className="highlighted-text">Hörnkvist</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/">intro</Nav.Link>
              <Nav.Link as={NavLink} to="/cv">cv</Nav.Link>
              <Nav.Link as={NavLink} to="/portfolio">portfolio</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}