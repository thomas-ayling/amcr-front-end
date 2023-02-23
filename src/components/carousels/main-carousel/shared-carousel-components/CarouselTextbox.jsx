import React from 'react';
import '../shared-carousel-components/CarouselTextbox.css';
import MarkdownComponent from '../../../markdown-component/MarkdownComponent';

const CarouselTextbox = ({ slideData, current }) => {


  return (
    <div className='textbox-wrapper'>
      {slideData.map((slide, index) => (
        <div details={index} key={index} className={index === current ? 'carousel-textbox active-carousel-textbox' : 'carousel-textbox'}>
          <MarkdownComponent markdownText={slide.descriptions} classNames={'card-text'} />
        </div>
      ))}
    </div>
  );
};

export default CarouselTextbox;
