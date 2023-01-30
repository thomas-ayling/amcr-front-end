import React from 'react';
import MainCarousel from '../components/carousels/main-carousel/MainCarousel';
import ContactUsHeader from '../service/ContactUsHeader';
import ContactComponent from '../components/contact-component/ContactComponent';

const Contacts = () => {
  return (
    <div>
      <MainCarousel type='header-single' slides={ContactUsHeader} />
      <ContactComponent feedbackType={'improvement'} />
    </div>
  );
};

export default Contacts;
