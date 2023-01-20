import React from 'react';
import ContactComponent from '../components/contact-component/ContactComponent';
import LibrarySearch from '../components/library/LibrarySearch';
import MainCarousel from '../components/main-carousel/MainCarousel';
import LibraryHeader from '../service/LibraryHeader';


const Library = () => {
  return (
    <>
      <MainCarousel type='header-single-description' slides={LibraryHeader} />
      <LibrarySearch />
      <ContactComponent feedbackType='library' />
    </>
  );
};

export default Library;
