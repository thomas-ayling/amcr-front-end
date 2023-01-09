import React from 'react';
import './CarouselTitles.css';

const CarouselTitles = ({ slides, current }) => {
  return slides.map((slide, index) => <div className={index === current ? 'carousel-title active-carousel-title' : 'carousel-title'}>{slide.title}</div>);
};

export default CarouselTitles;
