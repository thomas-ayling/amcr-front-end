import React from 'react';

const SlideDots = ({ slides, current, setCurrent }) => {
  return (
    <div className='slide-dots'>
      {slides.map((_, index) => (
        <div className={index === current ? 'pagination-dot pagination-dot-active' : 'pagination-dot'} onClick={() => setCurrent(index)}></div>
      ))}
    </div>
  );
};

export default SlideDots;
