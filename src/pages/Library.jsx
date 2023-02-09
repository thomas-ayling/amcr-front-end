import React from 'react';
import ContactComponent from '../components/contact-component/ContactComponent';
import LibrarySearch from '../components/library/LibrarySearch';
import MainCarousel from '../components/carousels/main-carousel/MainCarousel';
import { get } from '../service/MainCarouselService';
import { useEffect, useState } from "react";

const Library = () => {
  const [slideData, setSlideData] = useState([]);

  useEffect(() => {
    get("library", setSlideData);
  }, []);

  return (
    <>
      <MainCarousel type='header-single' slideData={slideData}/>
      <LibrarySearch />
      <ContactComponent feedbackType='library' />
    </>
  );
};

export default Library;
