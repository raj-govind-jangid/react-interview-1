import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap'
import axios from 'axios';
import { authList } from '../../apiList/authApi';
import { useDispatch } from 'react-redux';
import { clearAuth } from '../../store/auth/actions';

export default function AdminDashboard() {
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
    <LinkContainer to="/admin">      
    <Navbar.Brand>Home</Navbar.Brand>
    </LinkContainer>
    <Nav className="mr-auto">
      <LinkContainer to="/admin">  
        <Nav.Link>Product</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/admin/addproduct">  
        <Nav.Link>Add Product</Nav.Link>
      </LinkContainer>
      <Nav.Link onClick={logout}>Logout</Nav.Link>
    </Nav>
    </Container>
    </Navbar>
    <Outlet/>
    </>  
  );
}
