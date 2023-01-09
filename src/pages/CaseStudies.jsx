import { React } from 'react';

import MainCarousel from '../components/main-carousel/MainCarousel';
import CaseStudyCarousel from '../components/case-studies-carousel/CaseStudyCarousel';
import ContactComponent from '../components/contact-component/ContactComponent';
import '../components/main-carousel/MainCarousel.css';
import CaseStudyHeaderCarouselImages from '../service/CaseStudyHeaderCarouselMockService';

const CaseStudies = () => {
  return (
    <>
      <MainCarousel type='header' slides={CaseStudyHeaderCarouselImages} isLink={true} classNames='case-study-header-carousel' />
      <CaseStudyCarousel />
      <ContactComponent feedbackType='case-study' />
    </>
  );
};

export default CaseStudies;
