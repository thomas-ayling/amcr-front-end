import { element } from 'prop-types';
import React from 'react';

const BehaviourImage = ({ current, currentUrl, windowWidth, dataArray }) => {
  const imageSlider = dataArray.map((element, index) => {
    console.log(element.image);
    return (
      <div className={index === current ? 'behaviour-image-slide behaviour-image-active' : 'behaviour-image-slide'} key={index}>
        {index === current && (
          <a href={windowWidth < 1100 ? null : currentUrl}>
            <img className='behaviour-image' src={element.image} />
          </a>
        )}
      </div>
    );
  });
  return imageSlider;
};

export default BehaviourImage;
