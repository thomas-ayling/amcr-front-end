import React from 'react';
import MainCarousel from './main-carousel/MainCarousel';
import { get } from '../../service/MainCarouselService';
import { useEffect, useState } from 'react';
const WikiHeader = () => {
  const [slideData, setSlideData] = useState([]);

  useEffect(() => {
    get('wiki-header', setSlideData);
  }, []);
  return <MainCarousel type='header-single' slideData={slideData} />;
};

export default WikiHeader;
