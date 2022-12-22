import React from 'react';
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
