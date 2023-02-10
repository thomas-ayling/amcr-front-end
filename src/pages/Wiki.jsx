import { React } from 'react';
import WikiHeader from '../components/carousels/WikiHeader';
import TextIntro from '../components/shared-components/text-intro/TextIntro';
import ContactComponent from '../components/contact-component/ContactComponent';

import ContentSection from '../components/wiki/ContentSection';

const Wiki = () => {
  return (
    <>
      <WikiHeader />
      <TextIntro location='wiki' />
      <ContentSection />
      <ContactComponent feedbackType={'improvement'} />
    </>
  );
};

export default Wiki;
