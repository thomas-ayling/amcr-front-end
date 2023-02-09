import React from 'react';
import MainCarousel from '../carousels/main-carousel/MainCarousel';
import { get } from '../../service/MainCarouselService';
import { useEffect, useState } from 'react';

const ContactHeader = () => {
  const [slideData, setSlideData] = useState([]);

  useEffect(() => {
    get('contact-header', setSlideData);
  }, []);
  return <MainCarousel type='header-single' slideData={slideData} />;
};

export default ContactHeader;
