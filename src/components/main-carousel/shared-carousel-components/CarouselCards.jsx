import React from 'react';
import SlideDots from './SlideDots';

const CarouselCards = ({ slides, current, setCurrent }) => {
  return (
    <div className='textbox-wrapper'>
      {slides.map((carousel, index) => (
        <div details={index} key={index} className={index === current ? 'carousel-card carousel-card-active' : 'carousel-card'}>
          <img className='card-image' src={carousel.image} alt='' />
          <div className='card-overlay'></div>
          <SlideDots slides={slides} current={current} setCurrent={setCurrent} />
        </div>
      ))}
    </div>
  );
};

export default CarouselCards;
