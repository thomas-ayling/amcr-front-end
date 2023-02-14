import React from 'react';
import MainCarousel from './main-carousel/MainCarousel';
import { get } from '../../service/MainCarouselService';
import { useEffect, useState } from 'react';
import { runToastNotification } from '../toast-notification/ToastNotification';

const WikiHeader = () => {
  const [slideData, setSlideData] = useState([]);

  useEffect(() => {
    try {
      get('wiki-header', setSlideData);
    } catch (err) {
      runToastNotification('Unable to retrieve header carousel slide data', 'error');
    }
  }, []);
  return <MainCarousel type='header-single' slideData={slideData} />;
};

export default WikiHeader;
