import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import MyTable from './Table';
import { NavLink } from 'react-router-dom'

const MyNavbar = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Apna College</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link to="/">Table</Nav.Link>
        <Nav.Link to="/">New Student</Nav.Link>
        <Nav.Link to="/">Update Student</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  <NavLink to='/addNewStudent'>
  <div className="btn btn-primary m-3">+New student </div>
  </NavLink>
  <MyTable/>
  </>
  )
}

export default MyNavbar
