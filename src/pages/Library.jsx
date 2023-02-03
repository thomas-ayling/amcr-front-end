import React from 'react';
<<<<<<< HEAD
import ContactComponent from '../components/contact-component/ContactComponent';
import LibrarySearch from '../components/library/LibrarySearch';
import MainCarousel from '../components/carousels/main-carousel/MainCarousel';
import LibraryHeader from '../service/LibraryHeader';

=======
import Grid from '../components/Layout';
>>>>>>> 1a5fbd8e5782ee8d3212b422a1aff80aa95582b8

const Library = () => {
  return (
    <>
<<<<<<< HEAD
      <MainCarousel type='header-single-description' slides={LibraryHeader} />
      <LibrarySearch />
      <ContactComponent feedbackType='library' />
=======
      <Grid loc={'library'} />
>>>>>>> 1a5fbd8e5782ee8d3212b422a1aff80aa95582b8
    </>
  );
};

export default Library;
