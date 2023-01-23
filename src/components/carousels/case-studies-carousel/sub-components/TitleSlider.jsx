import React from 'react';

const TitleSlider = ({ current, titles }) => {
  const titleSlider = titles.map((title, index) => (
    <div className={index === current ? 'case-study-title-slide case-study-title-active' : 'case-study-title-slide'} key={index}>
      {index === current && <h1 className='case-study-title'>{title}</h1>}
    </div>
  ));

  return titleSlider;
};

export default TitleSlider;
