import React from 'react';
import MainCarousel from './main-carousel/MainCarousel';
import { get } from '../../service/MainCarouselService';
import { useEffect, useState } from 'react';
import { runToastNotification } from '../toast-notification/ToastNotification';
const HomepageBodyCarousel = () => {
  const [slideMainData, setSlideMainData] = useState([]);
  useEffect(() => {
    try {
      get('homepage-main', setSlideMainData);
    } catch (err) {
      runToastNotification('Unable to retrieve body carousel slide data', 'error');
    }
  }, []);
  return <MainCarousel slideData={slideMainData} type={'textbox'} />;
};

export default HomepageBodyCarousel;
