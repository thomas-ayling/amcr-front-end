import React from 'react';
<<<<<<< HEAD
import MainCarousel from '../components/carousels/main-carousel/MainCarousel';
import ContactsMainCarousel from '../components/carousels/contacts-team-carousel/ContactsMainCarousel';
import ContactUsHeader from '../service/ContactUsHeader';
import ContactComponent from '../components/contact-component/ContactComponent';
import DropFileInput from '../../src/components/attachment-component/DropFileInput';

const Contacts = () => {
  return (
    <div>
      <MainCarousel type='header-single' slides={ContactUsHeader} />
      <ContactsMainCarousel />
      <ContactComponent feedbackType={'improvement'} />
      <div className='drag-and-drop-box'>
        <DropFileInput />
      </div>
=======
import Grid from '../components/Layout';
const Contacts = () => {
  return (
    <div>
      <Grid loc={'contacts'} />
>>>>>>> 1a5fbd8e5782ee8d3212b422a1aff80aa95582b8
    </div>
  );
};

export default Contacts;
