import React from 'react';
import CaseStudyHeaderCarouselImages from '../components/case-study-header-carousel/CaseStudyHeaderCarouselImages';
import ContactComponent from '../components/contact-component/ContactComponent';
import BodyCarousel from '../components/case-studies-carousel/BodyCarousel';

const CaseStudies = () => {
  return (
    <>
      <BodyCarousel/>
      <ContactComponent feedbackType='case-study' />
    </>
  );
};

export default CaseStudies;
