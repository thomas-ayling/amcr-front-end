import React from 'react';
import ContactHeader from '../components/carousels/ContactHeader';
import ContactsMainCarousel from '../components/carousels/contacts-team-carousel/ContactsMainCarousel';
import ContactComponent from '../components/contact-component/ContactComponent';

const Contacts = () => {
  return (
    <div>
      <ContactHeader />
      <ContactsMainCarousel />
      <ContactComponent feedbackType={'improvement'} />
    </div>
  );
};

export default Contacts;
