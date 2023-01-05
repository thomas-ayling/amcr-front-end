import React from 'react';

const ButtonSlider = ({ current, currentUrl, dataArray }) => {
    const buttonSlider = dataArray.map((_, index) => {
        return (
          <div className={index === current ? 'case-study-button-slide case-study-button-active' : 'case-study-button-slide'} key={index}>
            {index === current && (
              <a className='case-study-button-anchor' href={currentUrl}>
                <button className='case-study-button'>Find out more</button>
              </a>
            )}
          </div>
        );
      });

  return buttonSlider;
};

export default ButtonSlider;