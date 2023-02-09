import React from 'react';
import ContactComponent from '../components/contact-component/ContactComponent';
import LibrarySearch from '../components/library/LibrarySearch';
import LibraryHeader from '../service/LibraryHeader';

const Library = () => {
  return (
    <>
      <LibraryHeader />
      <LibrarySearch />
      <ContactComponent feedbackType='library' />
    </>
  );
};

export default Library;
