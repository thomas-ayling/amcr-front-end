import React from 'react';

const CarouselCards = ({ images, current, paginationDots }) => {
  const carouselCards = images.map((carousel, index) => (
    <div images details={index} key={index} className={index === current ? 'carousel_card carousel_card-active' : 'carousel_card'}>
      
      <img className='card_image' src={carousel.image} alt='' />
      <div className='card_overlay'></div>
      <div className='carousel_pagination'>{paginationDots}</div>
    </div>
  ));
  return carouselCards;
};

export default CarouselCards;
