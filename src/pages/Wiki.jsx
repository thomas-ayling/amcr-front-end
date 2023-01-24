import React from 'react';
import MainCarousel from '../components/carousels/main-carousel/MainCarousel';
import ContactComponent from '../components/contact-component/ContactComponent';
import Diagram from '../components/diagram-component/Diagram';
import LibraryHeader from '../service/LibraryHeader';
const Wiki = () => {
  return (
    <>
      <MainCarousel type='header-single' slides={LibraryHeader} />
      <Diagram adminEnabled={false} />
      <ContactComponent feedbackType={'improvement'} />
    </>
  );
};

export default Wiki;
