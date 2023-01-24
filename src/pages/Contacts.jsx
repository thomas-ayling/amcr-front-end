import React from 'react';
import MainCarousel from '../components/carousels/main-carousel/MainCarousel';
import ContactsMainCarousel from '../components/carousels/contacts-team-carousel/ContactsMainCarousel';
import ContactUsHeader from '../service/ContactUsHeader';

const Contacts = () => {
  return (
    <div>
      <MainCarousel type='header-single' slides={ContactUsHeader} />
      <ContactsMainCarousel />
    </div>
  );
};

export default Contacts;
