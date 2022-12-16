import React from 'react';
// import { Container } from 'react-bootstrap';
import HomepageHeaderCarousel from '../components/carousel/HomepageHeaderCarousel';
import MainCarousel from '../components/carousel/MainCarousel';
import MainCarouselImages from '../components/carousel/MainCarouselImages';
import HomepageHeaderImages from '../components/carousel/HomepageHeaderImages';
import BehaviourCarousel from '../components/behavioural-carousel/BehaviourCarousel';
import '../components/behavioural-carousel/BehaviourCarousel.css';
import behaviourImages from '../components/behavioural-carousel/BehaviourImages';
import ContactComponent from '../components/contact-component/ContactComponent';

const HomePage = () => {
  return (
    <>
      <div className='page'>
        <HomepageHeaderCarousel images={HomepageHeaderImages} />
      </div>

      <div>
        <h1>We are Global Logic!</h1>
        <h2>A digital product engineering company. We integrate experience design and complex engineering to help our clients imagine what's possible and accelerate their transition into tomorrow's digital businesses.</h2>
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
        <MainCarousel images={MainCarouselImages} />
      </div>
      <div className='b-page'>
        <BehaviourCarousel images={behaviourImages} />
      </div>
      <ContactComponent feedbackType='feedback' />
    </>
  );
};

export default HomePage;
