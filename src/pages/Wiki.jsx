import React from 'react';
import { Container } from 'react-bootstrap';
import ContactComponent from '../components/contact-component/ContactComponent';

const Wiki = () => {
  return (
    <Container fluid>
      <ContactComponent feedbackType={'improvement'} />
    </Container>
  );
};

export default Wiki;