import React from 'react';
import { Container } from 'react-bootstrap';
import HomepageHeaderCarousel from '../components/carousel/HomepageHeaderCarousel';
// import MainCarousel from '../components/carousel/MainCarousel';
// import images from '../components/carousel/Images';
import HomepageHeaderImages from '../components/carousel/HomepageHeaderImages';


import BehaviourCarousel from '../components/behaviour-carousel/BehaviourCarousel';
import '../components/behaviour-carousel/BehaviourCarousel.css';
import BImages from '../components/behaviour-carousel/BImages';

const HomePage = () => {
  return (
    <Container>

      {/* <div className='page'>
        <MainCarousel images={images} />
      </div> */}

      <div>
        <HomepageHeaderCarousel images ={HomepageHeaderImages}/>
      </div>

      <div className='b-page'>
        <BehaviourCarousel images={BImages} />
      </div>
      
    </Container>
  );
};

export default HomePage;
