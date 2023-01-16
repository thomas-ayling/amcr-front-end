import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CarouselTitles.css';

const CarouselTitles = ({ slides, current, isLink }) => {
  const navigate = useNavigate();

  const handleClickLink = (id) => {
    navigate(`/case-study/${id}`);
  };

  return (
    <div className='title-wrapper'>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-title ${isLink && 'carousel-title-link'} ${index === current && 'active-carousel-title'}`}
          onClick={() => {
            isLink && handleClickLink(slides[current].id);
          }}
        >
          {slide.title}
        </div>
      ))}
    </div>
  );
};

export default CarouselTitles;
