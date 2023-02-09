import React from 'react';
import MainCarousel from './main-carousel/MainCarousel';
import { get } from '../../service/MainCarouselService';
import { useEffect, useState } from 'react';

const LibraryHeader = () => {
  const [slideData, setSlideData] = useState([]);

  useEffect(() => {
    get('library', setSlideData);
  }, []);
  return <MainCarousel type='header-single' slideData={slideData} />;
};

export default LibraryHeader;
