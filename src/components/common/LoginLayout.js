import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap'

export default function LoginLayout() {
  return(
    <>
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Brand</Navbar.Brand>
    <Nav className="mr-auto">
      <LinkContainer to="/login">  
        <Nav.Link>Login</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/register">  
        <Nav.Link>Register</Nav.Link>
      </LinkContainer>
    </Nav>
    </Container>
    </Navbar>
    <Outlet/>
    </>  
  );
}
