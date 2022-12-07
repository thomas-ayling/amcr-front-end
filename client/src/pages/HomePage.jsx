import React from 'react';
import { Container } from 'react-bootstrap';
import MainCarousel from '../components/carousel/MainCarousel';
import {images} from "../components/carousel/Images";
const HomePage = () => {

  return (
    <Container fluid className='page-section'>
      <div>
        <MainCarousel
        images ={images}/>
      </div>
    </Container>
  );
};


export default HomePage;