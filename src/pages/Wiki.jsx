import React from 'react';
import ContactComponent from '../components/contact-component/ContactComponent';
import Diagram from '../components/diagram-component/Diagram';

const Wiki = () => {
  return (
    <>
      <ContactComponent feedbackType={'improvement'} />
      <Diagram />
    </>
  );
};

export default Wiki;
