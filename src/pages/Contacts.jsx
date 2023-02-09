import React from 'react';
import ContactsMainCarousel from '../components/carousels/contacts-team-carousel/ContactsMainCarousel';
import ContactUsHeader from '../service/ContactUsHeader';
import ContactComponent from '../components/contact-component/ContactComponent';
import DropFileInput from '../../src/components/attachment-component/DropFileInput';

const Contacts = () => {
  return (
    <div>
      <ContactUsHeader />
      <ContactsMainCarousel />
      <ContactComponent feedbackType={'improvement'} />
      <div className='drag-and-drop-box'>
        <DropFileInput />
      </div>
    </div>
  );
};

export default Contacts;
