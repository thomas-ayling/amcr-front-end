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
      <MainCarousel type='header-single-description' slides={WikiHeader} />
      <TextIntro content={WikiTextIntro} />
      <ContentSection />
      <ContactComponent feedbackType={'improvement'} />
    </>
  );
};

export default Wiki;