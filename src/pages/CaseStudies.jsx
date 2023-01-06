import React from 'react';
import ContactComponent from '../components/contact-component/ContactComponent';
import CaseStudyCarousel from '../components/case-studies-carousel/CaseStudyCarousel';

const CaseStudies = () => {
  return (
    <>
      <CaseStudyCarousel />
      <ContactComponent feedbackType='case-study' />
    </>
  );
};

export default CaseStudies;
