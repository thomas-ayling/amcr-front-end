import React from 'react';
import { Container } from 'react-bootstrap';
import ContactComponent from '../components/contact-component/ContactComponent';

const Library = () => {
  return (
    <Container fluid>
      <ContactComponent feedbackType='library' />
    </Container>
  );
};

export default Library;
