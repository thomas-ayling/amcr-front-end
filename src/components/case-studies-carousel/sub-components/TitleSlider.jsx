import React from 'react';

const TitleSlider = ({ current, dataArray }) => {
  const titleSlider = dataArray.map((element, index) => (
    <div className={index === current ? 'case-study-title-slide case-study-title-active' : 'case-study-title-slide'} key={index}>
      {index === current && <h3 className='case-study-title'>{element.title}</h3>}
    </div>
  ));

  return titleSlider;
};

export default TitleSlider;
