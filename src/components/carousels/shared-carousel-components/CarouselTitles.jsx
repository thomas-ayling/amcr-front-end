import React from "react";
import '../shared-carousel-components/CarouselTitles.css';

const CarouselTitles = ({ slides, current, isLink, handleClickLink, classNames}) => {
  return slides.map((slide, index) =>  <div className={`carousel-title ${index === current && 'active-carousel-title'} ${classNames}`} onClick={() => {isLink && handleClickLink(slides.id)}}>
    {slide.title}</div>);
};

export default CarouselTitles;
