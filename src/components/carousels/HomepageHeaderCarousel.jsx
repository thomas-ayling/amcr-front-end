import React from 'react';
import MainCarousel from './main-carousel/MainCarousel';
import { get } from '../../service/MainCarouselService';
import { useEffect, useState } from 'react';
const HomepageHeaderCarousel = () => {
  const [slideHeaderData, setSlideHeaderData] = useState([]);
  useEffect(() => {
    get('homepage-header', setSlideHeaderData);
  }, []);
  return <MainCarousel type='header-multi' slideData={slideHeaderData} />;
};

export default HomepageHeaderCarousel;
