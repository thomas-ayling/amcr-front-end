import React from 'react';
import { Container } from 'react-bootstrap';
import MainCarousel from '../components/carousel/MainCarousel';
import {images} from "../components/carousel/Images";
import "../components/carousel/Carousel.css"
import YoutubeEmbed from "../components/youtube/YoutubeEmbed";
import "../components/youtube/ytstyles.css";
const HomePage = () => {

  return (
    <Container>
      <div className='page'>
        <MainCarousel
        images ={images}/>
      </div>
      <div>
      <h3>HII9KGHSGYE</h3>
      {/* <YoutubeEmbed embedId="HII9KGHSGYE" /> */}
      </div>
      
    </Container>
  );
};


export default HomePage;