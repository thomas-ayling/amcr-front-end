import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '/node_modules/font-awesome/css/font-awesome.min.css'; 

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <section className="top-area">
          {/* Column for Global Logic Logo */}
          <div className="footer-logo">
            <Link className="gl-logo" to={'/home'}><img alt="Global Logic Logo" src="https://www.globallogic.com/wp-content/uploads/2021/07/Logo_GL-Hitachi_White-web.svg"></img></Link>
          </div>
          {/* Column for internal page links */}
          <div className="footer-pages">
            <div className="internal-pages">
              <div><Link className="footer-link" to={`/onboarding/profile`}>Case Studies</Link></div>
              <div><Link className="footer-link" to={`/Wiki`}>Wiki</Link></div>
              <div><Link className="footer-link" to={`/Designs`}>Design Systems</Link></div>
              <div><Link className="footer-link" to={`/library`}>Reference Library</Link></div>
              <div><Link className="footer-link" to={`/contacts`}>Contacts</Link></div>
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
            <div class="social-icons">
					    <a href="https://www.linkedin.com/company/globallogic">
                <div className="social-icon"><i className="fa fa-linkedin round fa-space"></i></div>
              </a>
              <a href="https://twitter.com/globallogic">
                <div className="social-icon"><i className="fa fa-twitter round fa-space"></i></div>
                </a>
              <a href="https://www.facebook.com/GlobalLogic/">
                <div className="social-icon"><i className="fa fa-facebook round fa-space"></i></div>
                </a>
              <a href="https://www.youtube.com/user/globallogic">
                <div className="social-icon"><i className="fa fa-youtube round fa-space"></i></div>
                </a>
              <a href="https://www.instagram.com/globallogic_usa/">
                <div className="social-icon"><i className="fa fa-instagram round fa-space"></i></div>
                </a>				
            </div>
          </div>
          <div className="footer-trademark">
              <p>2023 Copyright GlobalLogic Inc. All rights reserved.</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Footer