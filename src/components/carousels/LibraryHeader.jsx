import React from 'react';
import MainCarousel from './main-carousel/MainCarousel';
import { get } from '../../service/MainCarouselService';
import { useEffect, useState } from 'react';
import { runToastNotification } from '../toast-notification/ToastNotification';

const LibraryHeader = () => {
  const [slideData, setSlideData] = useState([]);

  useEffect(() => {
    try {
      get('library', setSlideData);
    } catch (err) {
      runToastNotification('Unable to retrieve header slide data');
    }
  }, []);
  return <MainCarousel type='header-single' slideData={slideData} />;
};

export default LibraryHeader;
