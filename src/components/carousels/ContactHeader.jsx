import React from 'react';
import MainCarousel from '../carousels/main-carousel/MainCarousel';
import { get } from '../../service/MainCarouselService';
import { useEffect, useState } from 'react';
import { runToastNotification } from '../toast-notification/ToastNotification';

const ContactHeader = () => {
  const [slideData, setSlideData] = useState([]);

  useEffect(() => {
    try {
      get('contact-header', setSlideData);
    } catch (err) {
      runToastNotification('Unable to get contact header slides', 'error');
    }
  }, []);
  return <MainCarousel type='header-single' slideData={slideData} />;
};

export default ContactHeader;
