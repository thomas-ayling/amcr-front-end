import React from 'react';
import MainCarousel from './main-carousel/MainCarousel';
import { get } from '../../service/MainCarouselService';
import { useEffect, useState } from 'react';
import { runToastNotification } from '../toast-notification/ToastNotification';

const HomepageHeaderCarousel = () => {
  const [slideHeaderData, setSlideHeaderData] = useState([]);
  useEffect(() => {
    try {
      get('homepage-header', setSlideHeaderData);
    } catch (err) {
      runToastNotification('Unable to retrieve header carousel slide data', 'error');
    }
  }, []);
  return <MainCarousel type='header-multi' slideData={slideHeaderData} />;
};

export default HomepageHeaderCarousel;
