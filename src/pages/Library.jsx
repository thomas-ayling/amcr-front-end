import React from 'react';
import MainCarousel from '../components/main-carousel/MainCarousel';
import MainCarouselSlides from '../service/MainCarouselMockService';
import ContactComponent from '../components/contact-component/ContactComponent';


const Library = () => {
  return (
    <>
      <div className='page'>
        <MainCarousel images={MainCarouselSlides} />
      </div>
      <ContactComponent feedbackType='library' />
    </>
  );
};

export default Library;
