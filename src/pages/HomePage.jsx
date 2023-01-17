import React from 'react';
import { StyledHr } from '../styles/styles';
import './styles/HomePage.css';

import MainCarousel from '../components/main-carousel/MainCarousel';
import BehaviourCarousel from '../components/behaviour-carousel/BehaviourCarousel';
import MainCarouselSlides from '../service/MainCarouselMockService';
import HomepageCarouselSlides from '../service/HomepageCarouselMockService';
import ContactComponent from '../components/contact-component/ContactComponent';

const HomePage = () => {
  return (
    <div className='homepage-container'>
      <MainCarousel type='header' slides={HomepageCarouselSlides} />
      <div className='welcome-container-border'>
        <div className='welcome-container'>
          <h1 className='homepage-title'>We are Global Logic!</h1>
          <StyledHr />
          <h2 className='homepage-subheading'>
            We integrate experience design and complex engineering to help our clients imagine what's possible and accelerate their transition into tomorrow's digital businesses.
          </h2>
        </div>
      </div>
      <MainCarousel slides={MainCarouselSlides} type={'textbox'} />
      <BehaviourCarousel />
      <ContactComponent feedbackType='feedback' />
    </div>
  );
};

export default HomePage;
