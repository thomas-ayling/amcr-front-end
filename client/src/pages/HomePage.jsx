import React from 'react';
import { Container } from 'react-bootstrap';
import MainCarousel from '../components/carousel/MainCarousel';
import {images} from "../components/carousel/Images";
import "../components/carousel/Carousel.css"
const HomePage = () => {

  return (
    <Container>
      <div className='page'>
        <MainCarousel
        images ={images}/>
      </div>
      <div>
      <h3>HLEOEHGOHGIHSIOGHIOAghipshgipa</h3>
      
      </div>
      
    </Container>
  );
};


export default HomePage;