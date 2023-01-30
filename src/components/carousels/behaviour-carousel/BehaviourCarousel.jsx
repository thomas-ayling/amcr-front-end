import React, { useState } from 'react';
import './BehaviourCarousel.css';
import BehaviourImages from '../../../service/BehaviourCarouselMockService';
import BehaviourCarouselDescription from './behaviour-carousel-components/BehaviourCarouselDescription';
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi';

const BehaviourCarousel = () => {
  const [current, setCurrent] = useState(0);
  const length = BehaviourImages.length;

  return (
    <div className='behaviour-body-carousel-wrapper'>
      <div className='behaviour-carousel-inner-wrapper'>
        <h1 className='behaviour-body-carousel-page-title'>GlobalLogic UK&I Behaviours</h1>
        <div className='behaviour-carousel-content'>
          <BehaviourCarouselDescription current={current} dataArray={BehaviourImages} />
        </div>
        <div className='behaviour-carousel-arrows'>
          <div className='behaviour-carousel-arrow-left' onClick={() => setCurrent((current + length - 1) % length)}>
            <HiOutlineArrowNarrowLeft size={75} />
          </div>
          <div className='behaviour-carousel-arrow-right' onClick={() => setCurrent((current + 1) % length)}>
            <HiOutlineArrowNarrowRight size={75} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(BehaviourCarousel);
