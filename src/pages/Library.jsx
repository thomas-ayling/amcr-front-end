import React from 'react';
import ContactComponent from '../components/contact-component/ContactComponent';
import LibrarySearch from '../components/library/LibrarySearch';


const Library = () => {
  return (
    <>
      <LibrarySearch />
      <ContactComponent feedbackType='library' />
    </>
  );
};

export default Library;
