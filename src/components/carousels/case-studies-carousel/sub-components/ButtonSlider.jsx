import React from 'react';
import { Link } from 'react-router-dom';

const ButtonSlider = ({ current, pageData }) => {
  const buttonSlider = pageData.map((item, index) => {
    return (
      <div className={index === current ? 'case-study-button-slide case-study-button-active' : 'case-study-button-slide'} key={index}>
        {index === current && (
          <Link className='case-study-button-anchor' to={`/case-study/${item.id}`}>
            <button className='case-study-button'>Find out more</button>
          </Link>
        )}
      </div>
    );
  });

  return buttonSlider;
};

export default ButtonSlider;
