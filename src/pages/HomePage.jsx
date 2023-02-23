import React from 'react';

import BehaviourCarousel from '../components//carousels/behaviour-carousel/BehaviourCarousel';

import ContactComponent from '../components/contact-component/ContactComponent';

import HomepageHeaderCarousel from '../components/carousels/HomepageHeaderCarousel';
import HomepageBodyCarousel from '../components/carousels/HomepageBodyCarousel';
import TextIntro from '../components/shared-components/text-intro/TextIntro';

const HomePage = () => {
  return (
    <div className='homepage-container'>
      <HomepageHeaderCarousel />
      <TextIntro location='homepage' />
      <HomepageBodyCarousel />
      <BehaviourCarousel />
      <ContactComponent feedbackType='feedback' />
    </div>
  );
};

export default HomePage;
