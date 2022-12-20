import React from 'react';

const ImageSlider = ({ current, currentUrl, windowWidth, dataArray}) => {
  const imageSlider = dataArray.map((element, index) => (
    <div className={index === current ? 'case-study-image-slide case-study-image-active' : 'case-study-image-slide'} key={index}>
      {index === current && (
        <a className='case-study-image-anchor' href={windowWidth < 1100 ? null : currentUrl}>
          <img className='case-study-image' src={element.image} />
        </a>
      )}
    </div>
  ));

  return imageSlider;
};

export default ImageSlider;