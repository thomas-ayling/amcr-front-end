import './BehaviourCarousel.css';
import BehaviourImages from './BehaviourImages';
import { useState, useEffect } from 'react';
import BehaviourImage from './behaviour-carousel-components/BehaviourImage';
import BehaviourTitle from './behaviour-carousel-components/BehaviourTitle';
import BehaviourDescription from './behaviour-carousel-components/BehaviourDescription';

import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi';

const BodyCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const length = BehaviourImages.length;

  const resizeObserver = new ResizeObserver((entries) => {
    setWindowWidth(entries[0].contentRect.width);
  });

  resizeObserver.observe(document.body);

  const clickLeft = () => {
    current === 0 ? setCurrent(length - 1) : setCurrent((prevCurrent) => prevCurrent - 1);
  };

  const clickRight = () => {
    current === length - 1 ? setCurrent(0) : setCurrent((prevCurrent) => prevCurrent + 1);
  };

  return (
    <div className='behaviour-body-carousel-wrapper'>
      <h1 className='behaviour-body-carousel-page-title'>GlobalLogic UK&I Behaviours</h1>
      <div className='behaviour-carousel-container'>
        <BehaviourImage current={current} windowWidth={windowWidth} dataArray={BehaviourImages} />
        <div className='behaviour-carousel-content'>
          <BehaviourTitle current={current} dataArray={BehaviourImages} />
          <BehaviourDescription current={current} dataArray={BehaviourImages} />
        </div>
      </div>
      <div className='behaviour-carousel-arrows'>
        <div className='behaviour-carousel-arrow-left' onClick={clickLeft}>
          <HiOutlineArrowNarrowLeft size={75} />
        </div>
        <div className='behaviour-carousel-arrow-right' onClick={clickRight}>
          <HiOutlineArrowNarrowRight size={75} />
        </div>
      </div>
    </div>
  );
};

export default BodyCarousel;
