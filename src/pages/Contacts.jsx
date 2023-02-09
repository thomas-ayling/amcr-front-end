import React from 'react';
import MainCarousel from '../components/carousels/main-carousel/MainCarousel';
import ContactsMainCarousel from '../components/carousels/contacts-team-carousel/ContactsMainCarousel';
import ContactComponent from '../components/contact-component/ContactComponent';
import { get } from '../service/MainCarouselService';
import { useEffect, useState } from "react";

const Contacts = () => {
  const [slideData, setSlideData] = useState([]);

  useEffect(() => {
    get("contact-header", setSlideData);
  }, []);
  return (
    <div>
      <MainCarousel type='header-single' slideData={slideData} />
      <ContactsMainCarousel />
      <ContactComponent feedbackType={'improvement'} />
    </div>
  );
};

export default Contacts;