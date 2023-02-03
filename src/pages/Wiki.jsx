import { React } from 'react';
<<<<<<< HEAD
import ContactComponent from '../components/contact-component/ContactComponent';
import MainCarousel from '../components/carousels/main-carousel/MainCarousel';
import WikiHeader from '../service/WikiHeader';
import TextIntro from '../components/shared-components/text-intro/TextIntro';
import WikiTextIntro from '../service/WikiTextIntroService';
import ContentSection from '../components/wiki/ContentSection';
=======
import Grid from '../components/Layout';
>>>>>>> 1a5fbd8e5782ee8d3212b422a1aff80aa95582b8

const Wiki = () => {
  return (
    <>
<<<<<<< HEAD
      <MainCarousel type='header-single-description' slides={WikiHeader} />
      <TextIntro content={WikiTextIntro} />
      <ContentSection />
      <ContactComponent feedbackType={'improvement'} />
=======
      <Grid loc={'wiki'} />
>>>>>>> 1a5fbd8e5782ee8d3212b422a1aff80aa95582b8
    </>
  );
};

export default Wiki;
