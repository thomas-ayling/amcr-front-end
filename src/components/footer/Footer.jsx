import React from 'react';

import { Link } from "react-router-dom";
import {FaArrowCircleUp} from 'react-icons/fa';
import TwitterIcon from '../../resources/icons/twitter-icon.svg';
import LinkedinIcon from '../../resources/icons/linkedin-icon.svg';
import YoutubeIcon from '../../resources/icons/youtube-icon.svg';
import InstagramIcon from '../../resources/icons/instagram-icon.svg';
import FacebookIcon from '../../resources/icons/facebook-icon.svg';

import './Footer.css';
// import '/node_modules/font-awesome/css/font-awesome.min.css'; 


const Footer = () => {
  
  /* Function that sends the user to the top of the page */
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };

  const pageReload = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'instant'
    });
  };

  return (
    <>
    <div className="footer">
      <div className="container">
        <section className="top-area">
          {/* Column for Global Logic Logo */}
          <div className="footer-logo">
            <Link className="gl-logo" to={`/`} onClick={pageReload}><img alt="Global Logic Logo" src="https://www.globallogic.com/wp-content/uploads/2021/07/Logo_GL-Hitachi_White-web.svg"></img></Link>
          </div>
          {/* Column for internal page links */}
          <div className="footer-pages">
            <div className="internal-pages">
              <div><Link className="footer-link" to={`/case-studies`} onClick={pageReload}>Case Studies</Link></div>
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
                <div className="social-icon"><img src={LinkedinIcon} alt="Link to Global Logic Linkedin" className="social-icon-individual"></img></div>
              </a>
              <a href="https://twitter.com/globallogic">
                <div className="social-icon"><img src={TwitterIcon} alt="Link to Global Logic Twitter" className="social-icon-individual"></img></div>
                </a>
              <a href="https://www.facebook.com/GlobalLogic/">
                <div className="social-icon"><img src={FacebookIcon} alt="Link to Global Logic Facebook" className="social-icon-individual"></img></div>
                </a>
              <a href="https://www.youtube.com/user/globallogic">
                <div className="social-icon"><img src={YoutubeIcon} alt="Link to Global Logic Youtube" className="social-icon-individual"></img></div>
                </a>
              <a href="https://www.instagram.com/globallogic_usa/">
                <div className="social-icon"><img src={InstagramIcon} alt="Link to Global Logic Instagram" className="social-icon-individual"></img></div>
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
        <div className="pointer-container">
          <FaArrowCircleUp onClick={scrollToTop} 
            className="footer-top-scroll"/>
        </div>
      </div>	
    </>
  )
}

export default Footer