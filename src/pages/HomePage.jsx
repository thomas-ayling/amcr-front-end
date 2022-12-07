import React from 'react';
import { Link } from 'react-router-dom';
import ContactComponent from '../components/contact-component/ContactComponent';

const HomePage = () => {
  return (
    <div>
      <Link to={'/library'}>Library page</Link>
      <Link to={'/case-studies'}>Case study page</Link>
      <Link to={'/wiki'}>Wiki page</Link>
    </div>
  );
};

export default HomePage;
