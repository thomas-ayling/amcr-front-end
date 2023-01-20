import React from 'react';
import MainCarousel from '../components/main-carousel/MainCarousel';
import ContactUsHeader from '../service/ContactUsHeader';

const Contacts = () => {
  return <div><MainCarousel type='header-single' slides={ContactUsHeader} /></div>;
};

export default Contacts;
