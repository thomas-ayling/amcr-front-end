import React from 'react';

const DescriptionSlider = ({ current, overviews }) => {
  const descriptionSlider = overviews.map(
    (overview, index) =>
      index === current && (
        <div key={index} className='case-study-carousel-scrollable-description'>
          <div className={`case-study-description-slide ${index === current && ' case-study-description-active'}`} key={index}>
            <div className='case-study-description'>{overview}</div>
          </div>
          <div className='case-study-carousel-scroll-arrows'>
            <div className='case-study-carousel-scroll-up'></div>
            <div className='case-study-carousel-scroll-down'></div>
          </div>
        </div>
      )
  );

  return descriptionSlider;
};

export default DescriptionSlider;
