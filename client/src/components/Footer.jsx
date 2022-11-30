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
            <h1>Logo here</h1>
          </div>
          {/* Column for internal page links */}
          <div className="footer-pages">
            <div className="internal-pages">
              <div className="footer-link"><Link to={`/onboarding/profile`}>Case Studies</Link></div>
              <div className="footer-link"><Link to={`/Wiki`}>Wiki</Link></div>
              <div className="footer-link"><Link to={`/Designs`}>Design Systems</Link></div>
              <div className="footer-link"><Link to={`/library`}>Reference Library</Link></div>
              <div className="footer-link"><Link to={`/contacts`}>Contacts</Link></div>
            </div>
          </div>
          {/* Column for admin panel */}
          <div className="admin-panel">
            <Link to={`/admin`}>Admin Panel</Link>
          </div>
        </section>
        <section className="bottom-area">
          {/* Column for Social Media Links */}
          <div className="footer-social">
            <link></link>
            <link></link>
            <link></link>
            <link></link>
          </div>
        </section>
        <hr />
      </div>
    </div>
  )
}

export default Footer