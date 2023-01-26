import { React } from 'react';
import ContactComponent from '../components/contact-component/ContactComponent';
import Diagram from '../components/diagram-component/Diagram';

const Wiki = () => {
  return (
    <>
      <Diagram adminEnabled={false} />
      <ContactComponent feedbackType={'improvement'} />
    </>
  );
};

export default Wiki;
