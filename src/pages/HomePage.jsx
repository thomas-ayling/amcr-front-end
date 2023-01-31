import React from 'react';

import MainCarousel from '../components/carousels/main-carousel/MainCarousel';
import BehaviourCarousel from '../components//carousels/behaviour-carousel/BehaviourCarousel';
import MainCarouselSlides from '../service/MainCarouselMockService';
import HomepageCarouselSlides from '../service/HomepageCarouselMockService';
import ContactComponent from '../components/contact-component/ContactComponent';
import TextIntro from '../components/shared-components/text-intro/TextIntro';

const HomePage = () => {
  return (
    <div className='homepage-container'>
      <MainCarousel type='header-multi' slides={HomepageCarouselSlides} />
      <TextIntro location={"homepage"}/>
      <MainCarousel slides={MainCarouselSlides} type={'textbox'} />
      <BehaviourCarousel />
      <ContactComponent feedbackType='feedback' />
    </div>
  );
};

export default HomePage;