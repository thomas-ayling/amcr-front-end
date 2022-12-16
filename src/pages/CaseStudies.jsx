import React from 'react';
import ContactComponent from '../components/contact-component/ContactComponent';
import BodyCarousel from '../components/case-studies-carousel/BodyCarousel';

const CaseStudies = () => {
  return (
    <Container fluid>
      <BodyCarousel/>
      <ContactComponent feedbackType='case-study' />
    </Container>
  );
};

export default CaseStudies;
