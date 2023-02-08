import React from 'react';
import { useEffect, useState } from "react";

import MainCarousel from '../components/carousels/main-carousel/MainCarousel';
import BehaviourCarousel from '../components//carousels/behaviour-carousel/BehaviourCarousel';
import { get } from '../service/MainCarouselService';
import ContactComponent from '../components/contact-component/ContactComponent';
import TextIntro from '../components/shared-components/text-intro/TextIntro';

const HomePage = () => {
  const [slideHeaderData, setSlideHeaderData] = useState();
  const [slideMainData, setSlideMainData] = useState();

  useEffect(() => {
    get("homepage-header", setSlideHeaderData);
  }, []);

  useEffect(() => {
    get("homepage-main", setSlideMainData);
  }, []);

  return (
    <div className='homepage-container'>
      <MainCarousel type='header-multi' slideData={slideHeaderData} />
      <TextIntro location='homepage' />
      <MainCarousel slideData={slideMainData} type={'textbox'} />
      <BehaviourCarousel />
      <ContactComponent feedbackType='feedback' />
    </div>
  );
};

export default HomePage;