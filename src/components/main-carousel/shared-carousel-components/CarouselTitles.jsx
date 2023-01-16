import React from 'react';
import './CarouselTitles.css';

const CarouselTitles = ({ slides, current }) => {
  return (
    <div className='title-wrapper'>
      {slides.map((slide, index) => (
        <div key={index} className={index === current ? 'carousel-title active-carousel-title' : 'carousel-title'}>
          {slide.title}
        </div>
      ))}
    </div>
  );
};

export default CarouselTitles;
