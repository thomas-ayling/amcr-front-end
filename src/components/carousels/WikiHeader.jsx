import React from 'react';
import MainCarousel from './main-carousel/MainCarousel';
import WikiHeaderSlides from '../../service/WikiHeader';

const WikiHeader = () => {
  return <MainCarousel type='header-single-description' slides={WikiHeaderSlides} />;
};

export default WikiHeader;
