import React from 'react';
import CaseStudyHeaderCarouselImages from '../components/case-study-header-carousel/CaseStudyHeaderCarouselImages';
import ContactComponent from '../components/contact-component/ContactComponent';
import BodyCarousel from '../components/case-studies-carousel/BodyCarousel';
import MainCarousel from '../components/carousels/main-carousel/MainCarousel';
import '../components/case-study-header-carousel/HeaderCarousel.css';
const CaseStudies = () => {
  return (
    <>
    <MainCarousel type = "header" slides={CaseStudyHeaderCarouselImages} isLink={true} className="case-study-header-carousel"/>
      <BodyCarousel/>
      <ContactComponent feedbackType='case-study' />
    </>
  );
};

export default CaseStudies;
