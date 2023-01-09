<<<<<<< HEAD
import React from 'react';
import CaseStudyHeaderCarouselImages from '../components/case-study-header-carousel/CaseStudyHeaderCarouselImages';
import ContactComponent from '../components/contact-component/ContactComponent';
import BodyCarousel from '../components/case-studies-carousel/BodyCarousel';
import MainCarousel from '../components/carousels/main-carousel/MainCarousel';
=======
import { React } from 'react';
import ContactComponent from '../components/contact-component/ContactComponent';
import CaseStudyCarousel from '../components/case-studies-carousel/CaseStudyCarousel';
>>>>>>> dev

const CaseStudies = () => {
  return (
    <>
<<<<<<< HEAD
    <MainCarousel type = "header" slides={CaseStudyHeaderCarouselImages} isLink={true} classNames="case-study-header-carousel"/>
      <BodyCarousel/>
=======
      <CaseStudyCarousel />
>>>>>>> dev
      <ContactComponent feedbackType='case-study' />
    </>
  );
};

export default CaseStudies;
