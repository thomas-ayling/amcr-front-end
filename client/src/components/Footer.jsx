import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';

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
            <link></link>
            <link></link>
            <link></link>
            <link></link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Footer