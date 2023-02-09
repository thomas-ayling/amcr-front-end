import { React } from 'react';
import ContactComponent from '../components/contact-component/ContactComponent';
import MainCarousel from '../components/carousels/main-carousel/MainCarousel';
import WikiHeader from '../service/WikiHeader';
import TextIntro from '../components/shared-components/text-intro/TextIntro';
import WikiTextIntro from '../service/WikiTextIntroService';
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
