import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => (
  <Navbar className="color-nav" expand="lg" variant="light">
    <Container>
      <Navbar.Brand as={Link} to="/">
        <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        News<span className="bold-title-word">Edu</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto" alignRight>
          <Nav.Link as={Link} to="/saved">
            Saved
          </Nav.Link>
          <Nav.Link as={Link} to="/history">
            History
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
export default Header;
