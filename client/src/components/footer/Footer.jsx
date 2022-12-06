import React from 'react';

import { Link } from "react-router-dom";
import {FaArrowCircleUp} from 'react-icons/fa';
import { Button } from './FooterScroll';

import './Footer.css';
import '/node_modules/font-awesome/css/font-awesome.min.css'; 


const Footer = () => {
  
  /* Function that sends the user to the top of the page */
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };

  return (
    <>
    <div className="footer">
      <div className="container">
        <section className="top-area">
          {/* Column for Global Logic Logo */}
          <div className="footer-logo">
            <Link className="gl-logo" to={'/'}><img alt="Global Logic Logo" src="https://www.globallogic.com/wp-content/uploads/2021/07/Logo_GL-Hitachi_White-web.svg"></img></Link>
          </div>
          {/* Column for internal page links */}
          <div className="footer-pages">
            <div className="internal-pages">
              <div><Link className="footer-link" to={`/case-studies`}>Case Studies</Link></div>
              <div><Link className="footer-link" to={`/Wiki`}>Wiki</Link></div>
              <div><Link className="footer-link" to={`/contacts`}>Contacts</Link></div>
              <div><Link className="footer-link" to={`/library`}>Library</Link></div>
            </div>
          </div>
          {/* Column for admin panel */}
          <div className="admin-panel">
            <div>
              <Link  className="admin-link" to={`/admin`}>Admin Panel</Link>
            </div>
          </div>
        </section>
        <hr className="footer-divider" />
        <section className="bottom-area">
          {/* Column for Social Media Links */}
          <div className="footer-social">
            <div class="social-icons first-item">
					    <a href="https://www.linkedin.com/company/globallogic">
                <div className="social-icon"><i className="fa fa-linkedin round fa-space" alt="Link to Global Logic Linkedin"></i></div>
              </a>
              <a href="https://twitter.com/globallogic">
                <div className="social-icon"><i className="fa fa-twitter round fa-space" alt="Link to Global Logic Twitter"></i></div>
                </a>
              <a href="https://www.facebook.com/GlobalLogic/">
                <div className="social-icon"><i className="fa fa-facebook round fa-space" alt="Link to Global Logic Facebook"></i></div>
                </a>
              <a href="https://www.youtube.com/user/globallogic">
                <div className="social-icon"><i className="fa fa-youtube round fa-space" alt="Link to Global Logic Youtube"></i></div>
                </a>
              <a href="https://www.instagram.com/globallogic_usa/">
                <div className="social-icon"><i className="fa fa-instagram round fa-space" alt="Link to Global Logic Instagram"></i></div>
                </a>
            </div>
          </div>
          {/* Column for Global Logic trademark */}
          <div className="footer-trademark">
              <p>© GlobalLogic. 2023</p>
          </div>
          
        </section>
      </div>		
    </div>
    <div className="last-item">
        <Button>
          <FaArrowCircleUp onClick={scrollToTop} 
            className="footer-top-scroll"/>
        </Button>
      </div>	
    </>
  )
}

export default Footer