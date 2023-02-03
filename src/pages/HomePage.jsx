import React from 'react';
<<<<<<< HEAD

import MainCarousel from '../components/carousels/main-carousel/MainCarousel';
import BehaviourCarousel from '../components//carousels/behaviour-carousel/BehaviourCarousel';
import MainCarouselSlides from '../service/MainCarouselMockService';
import HomepageCarouselSlides from '../service/HomepageCarouselMockService';
import ContactComponent from '../components/contact-component/ContactComponent';
import TextIntro from '../components/shared-components/text-intro/TextIntro';
import HomepageTextIntro from '../service/HomepageTextIntroService';

=======
import Grid from '../components/Layout';
>>>>>>> 1a5fbd8e5782ee8d3212b422a1aff80aa95582b8

const HomePage = () => {
  return (
    <div className='homepage-container'>
<<<<<<< HEAD
      <MainCarousel type='header-multi' slides={HomepageCarouselSlides} />
      <TextIntro content={HomepageTextIntro}/>
      <MainCarousel slides={MainCarouselSlides} type={'textbox'} />
      <BehaviourCarousel />
      <ContactComponent feedbackType='feedback' />
=======
      <Grid loc={'homepage'} />
>>>>>>> 1a5fbd8e5782ee8d3212b422a1aff80aa95582b8
    </div>
  );
};

export default HomePage;