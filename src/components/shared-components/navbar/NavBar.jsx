import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../../../assets/logo/GLLogo.png';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  const [expand, setExpanded] = useState(false);
  const [navColour, setNavbar] = useState(false);
  const location = useLocation();

  const pageReload = () => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  };

  function scrollHandler() {
    if (window.scrollY >= 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  const changeView = (expandedVal) => {
    setExpanded(expandedVal);
    pageReload();
  };

  window.addEventListener('scroll', scrollHandler);

  return (
    <Navbar expanded={expand} fixed='top' expand='md' className={navColour ? 'navbar-sticky' : 'navbar'}>
      <Navbar.Brand href='/' className='d-flex'>
        <img src={Logo} className='img-fluid logo-menu' alt='brand' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' onClick={() => setExpanded(expand ? false : 'expanded')}>
        <span></span>
        <span></span>
        <span></span>
      </Navbar.Toggle>
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='ms-auto' defaultActiveKey='#home'>
          <Nav.Item>
            <Nav.Link as={Link} to='/case-studies' active={location.pathname === '/case-studies'} onClick={() => changeView(false)}>
              Case Studies
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={Link} to='/wiki' active={location.pathname === '/wiki'} onClick={() => changeView(false)}>
              Wiki
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={Link} to='/contacts' active={location.pathname === '/contacts'} onClick={() => changeView(false)}>
              Contacts
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={Link} to='/library' active={location.pathname === '/library'} onClick={() => changeView(false)}>
              Library
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
