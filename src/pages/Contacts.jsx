import React from 'react';
import ContactsMainCarousel from '../components/carousels/contacts-team-carousel/ContactsMainCarousel';
import ContactComponent from '../components/contact-component/ContactComponent';
import DropFileInput from '../../src/components/attachment-component/DropFileInput';
import ContactHeader from '../components/carousels/ContactHeader';
import Grid from '../components/Layout';
const Contacts = () => {
  return (
    <div>
      <Grid loc={'contacts'} />
      <ContactsMainCarousel />
    </div>
  );
};

export default Contacts;
