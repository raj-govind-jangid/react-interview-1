import axios from 'axios';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Outlet } from 'react-router-dom';
import { authList } from '../../apiList/authApi';
import { clearAuth } from '../../store/auth/actions';

export default function UserDashboard() {
  const dispatch = useDispatch();
  const logout = async () => {
    let response = await axios.post(authList.logout);
    if(response.data.success){
      dispatch(clearAuth());
      window.location.reload()
    }
  }
  return(
    <>
    <Navbar bg="dark" variant="dark">
    <Container>
    <LinkContainer to="/user">      
    <Navbar.Brand>Home</Navbar.Brand>
    </LinkContainer>
    <Nav className="mr-auto">
      <LinkContainer to="/user/card">  
        <Nav.Link>Card</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/user/order">  
        <Nav.Link>Order</Nav.Link>
      </LinkContainer>
      <Nav.Link onClick={logout}>Logout</Nav.Link>
    </Nav>
    </Container>
    </Navbar>
    <Outlet/>
    </>
  );
}
