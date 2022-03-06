import { NavLink } from "react-router-dom";
import React from 'react';
import { Nav, Navbar } from "react-bootstrap";

const NavbarMenu = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand to="/">Tasks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink  to="/">All tasks</NavLink>
            <NavLink  to="/AddTask">Add Task</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
};

export default NavbarMenu;