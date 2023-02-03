import React from 'react';
import HomepageCarouselSlides from '../../service/HomepageCarouselMockService';
import MainCarousel from './main-carousel/MainCarousel';
const HomepageHeaderCarousel = () => {
  return <MainCarousel type='header-multi' slides={HomepageCarouselSlides} />;
};

export default HomepageHeaderCarousel;
