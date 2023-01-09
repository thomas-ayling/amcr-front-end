import React from "react";
import '../shared-carousel-components/CarouselTitles.css';

const CarouselTitles = ({ slides, current }) => {
  return slides.map((slide, index) =>  <div key={index }className={index === current ? 'carousel-title active-carousel-title' : 'carousel-title'}>
    {slide.title}</ div>);
};

export default CarouselTitles;
