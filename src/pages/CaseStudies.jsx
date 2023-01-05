import React from 'react';
import CaseStudyHeaderCarouselImages from '../components/case-study-header-carousel/CaseStudyHeaderCarouselImages';
import ContactComponent from '../components/contact-component/ContactComponent';
import MainCarousel from '../components/carousel/MainCarousel';
import CaseStudiesHeaderCarousel from '../components/case-study-header-carousel/HeaderCarousel';

const CaseStudies = () => {
  return (
    <>
    <div >
    <div className='page' ><CaseStudiesHeaderCarousel images={CaseStudyHeaderCarouselImages} /></div>;

      <div><ContactComponent feedbackType='case-study' />;</div>
      </div>
    </>
  );
};

export default CaseStudies;
