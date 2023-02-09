import React from 'react';
import ContactHeader from '../components/carousels/ContactHeader';
import ContactsMainCarousel from '../components/carousels/contacts-team-carousel/ContactsMainCarousel';
import ContactComponent from '../components/contact-component/ContactComponent';
import { get } from '../service/MainCarouselService';
import { useEffect, useState } from 'react';

const Contacts = () => {
  const [slideData, setSlideData] = useState([]);

  useEffect(() => {
    get('contact-header', setSlideData);
  }, []);
  return (
    <div>
      <ContactHeader />
      <ContactsMainCarousel />
      <ContactComponent feedbackType={'improvement'} />
    </div>
  );
};

export default Contacts;
