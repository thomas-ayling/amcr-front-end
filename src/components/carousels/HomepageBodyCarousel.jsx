import React from 'react';

import MainCarousel from './main-carousel/MainCarousel';
import { get } from '../../service/MainCarouselService';
import { useEffect, useState } from 'react';
const HomepageBodyCarousel = () => {
  const [slideMainData, setSlideMainData] = useState([]);
  useEffect(() => {
    get('homepage-main', setSlideMainData);
  }, []);
  return <MainCarousel slideData={slideMainData} type={'textbox'} />;
};

export default HomepageBodyCarousel;
