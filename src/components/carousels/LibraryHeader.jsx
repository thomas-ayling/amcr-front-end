import React from 'react';
import MainCarousel from './main-carousel/MainCarousel';
import LibraryHeaderService from '../../service/LibraryHeader';

const LibraryHeader = () => {
  return <MainCarousel type='header-single-description' slides={LibraryHeaderService} />;
};

export default LibraryHeader;
