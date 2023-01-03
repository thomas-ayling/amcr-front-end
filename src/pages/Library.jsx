import React from 'react';
import MainCarousel from '../components/carousel/MainCarousel';
import ContactComponent from '../components/contact-component/ContactComponent';
import mainCarouselImages from '../components/carousel/MainCarouselImages';


const Library = () => {
  return (
    <>
      <div className='page'>
        <MainCarousel images={mainCarouselImages} />
      </div>
      <ContactComponent feedbackType='library' />
    </>
  );
};

export default Library;
