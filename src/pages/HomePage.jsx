import React from 'react';
import '../components/behaviour-carousel/BehaviourCarousel.css';
import HomepageHeaderCarousel from '../components/carousel/HomepageHeaderCarousel';
import MainCarousel from '../components/carousel/MainCarousel';
import HomepageHeaderImages from '../components/carousel/HomepageHeaderImages';
import BehaviourCarousel from '../components/behaviour-carousel/BehaviourCarousel';
import ContactComponent from '../components/contact-component/ContactComponent';
import mainCarouselImages from '../components/carousel/MainCarouselImages';

const HomePage = () => {
  return (
    <>
      <div className='page'>
        <HomepageHeaderCarousel images={HomepageHeaderImages} />
      </div>

      <div>
        <h1>We are Global Logic!</h1>
        <h2>
          A digital product engineering company. We integrate experience design and complex engineering to help our clients imagine what's possible and accelerate their transition
          into tomorrow's digital businesses.
        </h2>
      </div>
      <div>
        <iframe
          width='100%'
          height='600'
          src='https://www.youtube.com/embed/HII9KGHSGYE'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; 
      gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
      <div className='page'>
        <MainCarousel images={mainCarouselImages} />
      </div>
      <BehaviourCarousel />
      <ContactComponent feedbackType='feedback' />
    </>
  );
};

export default HomePage;
