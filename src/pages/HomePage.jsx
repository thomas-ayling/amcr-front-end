import React from 'react';
import BehaviourCarousel from '../components//carousels/behaviour-carousel/BehaviourCarousel';
import ContactComponent from '../components/contact-component/ContactComponent';
import Grid from '../components/Layout';
import HomepageHeaderCarousel from '../components/carousels/HomepageHeaderCarousel';
import HomepageIntro from '../components/HomepageTextIntro';
import HomepageBodyCarousel from '../components/carousels/HomepageBodyCarousel';

const HomePage = () => {
  return (
    <div className='homepage-container'>
      {/* <HomepageHeaderCarousel />
      <HomepageIntro />
      <HomepageBodyCarousel />
      <BehaviourCarousel />
      <ContactComponent feedbackType='feedback' /> */}
      <Grid loc={'homepage'} />
    </div>
  );
};

export default HomePage;
