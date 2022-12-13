import React from 'react';
import { Container } from 'react-bootstrap';
import ContactComponent from '../components/contact-component/ContactComponent';

const Library = () => {
  return (
    <Container fluid className='page-section'>
      <div>Library</div>
      <ContactComponent type='library' />
    </Container>
  );
};

export default Library;
