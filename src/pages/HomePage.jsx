import React from 'react';

import BehaviourCarousel from '../components//carousels/behaviour-carousel/BehaviourCarousel';

import ContactComponent from '../components/contact-component/ContactComponent';

import HomepageHeaderCarousel from '../components/carousels/HomepageHeaderCarousel';
import HomepageBodyCarousel from '../components/carousels/HomepageBodyCarousel';
import HomepageIntro from '../components/HomepageTextIntro';

const HomePage = () => {
  return (
    <div className='homepage-container'>
      <HomepageHeaderCarousel />
      <HomepageIntro />
      <HomepageBodyCarousel />
      <BehaviourCarousel />
      <ContactComponent feedbackType='feedback' />
    </div>
  );
};

export default HomePage;
