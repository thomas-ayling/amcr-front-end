import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from '../../resources/logo/GLLogo.png';
import { Link } from 'react-router-dom';
import './NavBar.css';
// import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener('scroll', scrollHandler);

  return (
    <Navbar expanded={expand} fixed='top' expand='md' className={navColour ? 'navbar-sticky' : 'navbar'}>
      <Navbar.Brand href='/' className='d-flex'>
        <img src={logo} className='img-fluid logo-menu' alt='brand' />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls='responsive-navbar-nav'
        onClick={() => {
          updateExpanded(expand ? false : 'expanded');
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </Navbar.Toggle>
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='ms-auto' defaultActiveKey='#home'>
          <Nav.Item>
            <Nav.Link as={Link} to='/case-studies' onClick={() => updateExpanded(false)}>
              Case Studies
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={Link} to='/wiki' onClick={() => updateExpanded(false)}>
              Wiki
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={Link} to='/contacts' onClick={() => updateExpanded(false)}>
              Contacts
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={Link} to='/library' onClick={() => updateExpanded(false)}>
              Library
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
