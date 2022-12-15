import React from 'react';
import { Container } from 'react-bootstrap';
import ContactComponent from '../components/contact-component/ContactComponent';
import LibrarySearch from '../components/library/LibrarySearch';

const Library = () => {
  return (
    <Container>
      <LibrarySearch />
      <ContactComponent feedbackType='library' />
    </Container>
  );
};

export default Library;
