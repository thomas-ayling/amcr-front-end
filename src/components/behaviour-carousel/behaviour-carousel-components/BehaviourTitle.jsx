import React from 'react';

const BehaviourTitle = ({ current, dataArray }) => {
  const titleSlider = dataArray.map((element, index) => (
    <div className={index === current ? 'behaviour-title-slide behaviour-title-active' : 'behaviour-title-slide'} key={index}>
      {index === current && <h3 className='behaviour-title'>{element.title}</h3>}
    </div>
  ));

  return titleSlider;
};

export default BehaviourTitle;
