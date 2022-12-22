import React from 'react';

const CarouselTextbox = ({ images, current }) => {
  const carouselTextbox = images.map((image, index) => (
    <div key={index} className={index === current ? 'carousel_card_textbox2 carousel_card_textbox-active' : 'carousel_card_textbox2'}>
      <div className='card_text'>
        <h1>{image.title}</h1>
        <h2 className='card_title2'>{image.overview.substring(0, 300)}</h2>
        <h2>+44 (0)161 407 0069</h2>
        <a className='link_text' href={image.target} rel='noreferrer'>
          View Map
        </a>
      </div>
    </div>
  ));
  return carouselTextbox;
};

export default CarouselTextbox;