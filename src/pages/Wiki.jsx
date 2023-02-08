import { React } from 'react';
import { useEffect, useState } from "react";
import { get } from '../service/MainCarouselService';

import ContactComponent from '../components/contact-component/ContactComponent';
import MainCarousel from '../components/carousels/main-carousel/MainCarousel';
import TextIntro from '../components/shared-components/text-intro/TextIntro';
import ContentSection from '../components/wiki/ContentSection';

const Wiki = () => {
  const [slideData, setSlideData] = useState();

  useEffect(() => {
    get("wiki-header", setSlideData);
  }, []);

  return (
    <>
      <MainCarousel type='header-single' slideData={slideData} location='wiki-header' />
      <TextIntro location='wiki' />
      <ContentSection />
      <ContactComponent feedbackType={'improvement'} />
    </>
  );
};

export default Wiki;