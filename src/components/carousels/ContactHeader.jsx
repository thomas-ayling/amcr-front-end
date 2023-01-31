import React from 'react';
import MainCarousel from '../carousels/main-carousel/MainCarousel';
import ContactUsHeader from '../../service/ContactUsHeader';

const ContactHeader = () => {
  return <MainCarousel type='header-single' slides={ContactUsHeader} />;
};

export default ContactHeader;
