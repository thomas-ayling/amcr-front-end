import React, { useState, useEffect } from 'react';
import './BehaviourCarousel.css';
import BehaviourImages from '../../../service/BehaviourCarouselMockService';
import BehaviourCarouselDescription from './behaviour-carousel-components/BehaviourCarouselDescription';
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi';

function BehaviourCarousel() {
  const [state, setState] = useState({ current: 0, windowWidth: window.innerWidth });
  const length = BehaviourImages.length;

  useEffect(() => {
    const handleResize = () => setState({ ...state, windowWidth: window.innerWidth });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [state]);

  const clickLeft = () => setState({ ...state, current: state.current === 0 ? length - 1 : state.current - 1 });

  const clickRight = () => setState({ ...state, current: state.current === length - 1 ? 0 : state.current + 1 });

  return (
    <div className='behaviour-body-carousel-wrapper'>
      <div className='behaviour-carousel-inner-wrapper'>
        <h1 className='behaviour-body-carousel-page-title'>GlobalLogic UK&I Behaviours</h1>
        <div className='behaviour-carousel-content'>
          <BehaviourCarouselDescription current={state.current} windowWidth={state.windowWidth} dataArray={BehaviourImages} />
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
    </div>
  );
}

export default React.memo(BehaviourCarousel);
