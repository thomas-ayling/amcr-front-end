import React from 'react';

const DescriptionSlider = ({ current, dataArray }) => {
  const descriptionSlider = dataArray.map((element, index) => {
    return (
      <div className={index === current ? 'case-study-description-slide case-study-description-active' : 'case-study-description-slide'} key={index}>
        {index === current && <div className='case-study-description'>{element.description}</div>}
      </div>
    );
  });

  return descriptionSlider;
};

export default DescriptionSlider;
