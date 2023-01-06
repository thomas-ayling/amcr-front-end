import React from 'react';
import '../shared-carousel-components/CarouselTextbox.css';


const CarouselTextbox = ({ slides, current }) => {
  return slides.map((slide, index) => (
    <div images details={index} key={index} className={index === current ? 'carousel-textbox active-carousel-textbox' : 'carousel-textbox'}>
      <div className='card-text'>
        <h1 className='card-title'>{slide.title}</h1>
        <ul className='card-subtitle-list'>
          <li className='card-subtitle'>{slide.overview.substring(0, 300)}</li>
          <li className='card-subtitle'>+44 (0)161 407 0069</li>
        </ul>
        <a className='card-link' href={slide.target} rel='noreferrer'>
          View Map
        </a>
      </div>
    </div>
  ));
};

export default CarouselTextbox;
