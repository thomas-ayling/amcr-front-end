import React from 'react';
import { Link } from 'react-router-dom';
import ContactComponent from '../components/contact-component/ContactComponent';

const HomePage = () => {
  return (
    <div>
      <Link to={'/library'}>Library page</Link>
      <br />
      <Link to={'/case-studies'}>Case study page</Link>
      <br />
      <Link to={'/wiki'}>Wiki page</Link>
      <br />
      <ContactComponent feedbackType={'feedback'} />
    </div>
  );
};

export default HomePage;
