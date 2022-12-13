import React from 'react';
import { Container } from 'react-bootstrap';
import HomepageHeaderCarousel from '../components/carousel/HomepageHeaderCarousel';
import MainCarousel from '../components/carousel/MainCarousel';
import MainCarouselImages from '../components/carousel/MainCarouselImages';
import HomepageHeaderImages from '../components/carousel/HomepageHeaderImages';


import BehaviourCarousel from '../components/behavioural-carousel/BehaviourCarousel';
import '../components/behavioural-carousel/BehaviourCarousel.css';
import behaviourImages from '../components/behavioural-carousel/BehaviourImages';

const HomePage = () => {
  return (
    <Container>

      <div className='page'>
        <MainCarousel images={MainCarouselImages} />
      </div>

      {/* 
      <div>
        <HomepageHeaderCarousel images ={HomepageHeaderImages}/>
      </div> */}
      
      <div>
        <h1>
          Welcome to Global Logic!
        </h1>
        <h2>We are here to provide you the best experience in finding what you are looking for.
          This could be anything in our library or perhaps a case study that you are interested in. 
          If there isn't something that you are looking for. Please feel free to contact us and propose an improvement.
        </h2>
      </div>
      <div >
      <iframe  width="100%" height="600" src="https://www.youtube.com/embed/HII9KGHSGYE" 
      title="YouTube video player" frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
      gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <div className='page'>
        <MainCarousel images={MainCarouselImages} />
      </div>

      <div className='b-page'>
        <BehaviourCarousel images={behaviourImages} />
      </div>

    </Container>
  );
};

export default HomePage;
