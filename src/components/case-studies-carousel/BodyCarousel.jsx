import './BodyCarousel.css';
import bodyCarouselData from './bodyCarouselData';
import { useState, useEffect } from 'react';

export default function BodyCarousel() {
  const [current, setCurrent] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function watchWidth() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', watchWidth);

    return function () {
      window.removeEventListener('resize', watchWidth);
    };
  }, []);

  const currentUrl = `case-studies${bodyCarouselData[current].url}`;
  const length = bodyCarouselData.length;

  const imageSlider = bodyCarouselData.map((element, index) => {
    return (
      <div className={index === current ? 'case-study-image-slide case-study-image-active' : 'case-study-image-slide'} key={index}>
        {index === current && (
          <a className='case-study-image-anchor' href={windowWidth >= 1000 ? currentUrl : null}>
            <img className='case-study-image' src={element.image} />
          </a>
        )}
      </div>
    );
  });

  const titleSlider = bodyCarouselData.map((element, index) => {
    return (
      <div className={index === current ? 'case-study-title-slide case-study-title-active' : 'case-study-title-slide'} key={index}>
        {index === current && <h3 className='case-study-title'>{element.title}</h3>}
      </div>
    );
  });

  const descriptionSlider = bodyCarouselData.map((element, index) => {
    return (
      <div className={index === current ? 'case-study-description-slide case-study-description-active' : 'case-study-description-slide'} key={index}>
        {index === current && <div className='case-study-description'>{element.description}</div>}
      </div>
    );
  });

  const buttonSlider = bodyCarouselData.map((element, index) => {
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

  const clickLeft = () => {
    current === 0 ? setCurrent(length - 1) : setCurrent((prevCurrent) => prevCurrent - 1);
  };

  const clickRight = () => {
    current === length - 1 ? setCurrent(0) : setCurrent((prevCurrent) => prevCurrent + 1);
  };

  return (
    <div className='body-carousel-wrapper'>
      <h1 className='page-title'>Case Studies</h1>
      <div className='case-study-container'>
        <div className='image-slider-container'>{imageSlider}</div>
        <div className='case-study-content'>
          {titleSlider}
          <div className='case-study-scrollable-description'>
            {descriptionSlider}
            <div className='case-study-scroll-arrows'>
              <div className='case-study-scroll-up'></div>
              <div className='case-study-scroll-down'></div>
            </div>
          </div>
          {buttonSlider}
        </div>
      </div>
      <div className='body-carousel-arrows'>
        <div className='body-carousel-arrow-left' onClick={clickLeft}></div>
        <div className='case-study-page'>
          {current + 1} / {length}
        </div>
        <div className='body-carousel-arrow-right' onClick={clickRight}></div>
      </div>
    </div>
  );
}
