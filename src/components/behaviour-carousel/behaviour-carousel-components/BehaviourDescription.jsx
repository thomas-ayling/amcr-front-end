import React from 'react';

const BehaviourDescription = ({ current, dataArray }) => {
  const descriptionSlider = dataArray.map((element, index) => {
    return (
      <div className={index === current ? 'behaviour-description-slide behaviour-description-active' : 'behaviour-description-slide'} key={index}>
        {index === current && <div className='behaviour-description'>{element.description}</div>}
      </div>
    );
  });

  return descriptionSlider;
};

export default BehaviourDescription;
