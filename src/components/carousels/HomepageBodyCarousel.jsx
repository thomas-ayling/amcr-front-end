import React from 'react';
import MainCarouselSlides from '../../service/MainCarouselMockService';
import MainCarousel from './main-carousel/MainCarousel';
const HomepageBodyCarousel = () => {
  return <MainCarousel slides={MainCarouselSlides} type={'textbox'} />;
};

export default HomepageBodyCarousel;
