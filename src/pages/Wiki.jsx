import { React } from 'react';
import WikiHeader from '../components/carousels/WikiHeader';
import WikiTextIntro from '../components/WikiTextIntro';
import ContactComponent from '../components/contact-component/ContactComponent';

import ContentSection from '../components/wiki/ContentSection';

const Wiki = () => {
  return (
    <>
      <WikiHeader />
      <WikiTextIntro />
      <ContentSection />
      <ContactComponent feedbackType={'improvement'} />
    </>
  );
};

export default Wiki;
