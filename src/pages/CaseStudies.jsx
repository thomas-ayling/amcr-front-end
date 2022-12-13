import React from 'react';
import { Container } from 'react-bootstrap';
import ContactComponent from '../components/contact-component/ContactComponent';

const CaseStudies = () => {
  return (
    <Container fluid className='page-section'>
      <div>CaseStudies</div>
      <ContactComponent type='case-study' />
    </Container>
  );
};

export default CaseStudies;