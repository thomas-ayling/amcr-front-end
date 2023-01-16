import './MainCarousel.css';
import { useEffect, useState } from 'react';
import CarouselCards from './shared-carousel-components/CarouselCards';
import CarouselTextbox from './shared-carousel-components/CarouselTextbox';
import CarouselTitles from './shared-carousel-components/CarouselTitles';

const MainCarousel = ({ slides, type }) => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 75; //distance on when a user swipes

  const slideRight = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  }; //slide left and right functions - right is used for both the timer and touch events while left is only for touch events

 
  useEffect(() => {
    const timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 5000);
    return () => clearTimeout(timeOut);
  });

  let timeOut = null;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setAutoPlay(false); //clears timer/autoplay when user touches the carousel
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd)
      //makes sure only swipes are registered
      return;

    const distance = touchStart - touchEnd;

    if (distance > minSwipeDistance) {
      slideLeft();
    }

    if (distance < -minSwipeDistance) {
      slideRight();
    }
  };

  const handleMouseEnter = () => {
    setAutoPlay(false);
    clearTimeout(timeOut);
  };

  const containerClassNames = `${type.includes('header') && 'header-carousel'} ${type.includes('textbox') && 'textbox-carousel'}`

  return (
    <div className={`carousel-container ${containerClassNames}`}>
      <div className='carousel-inner' onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} onMouseEnter={handleMouseEnter} onMouseLeave={() => setAutoPlay(true)}>
        <CarouselCards slides={slides} current={current} setCurrent={setCurrent} />
        {type.includes('header') && <CarouselTitles slides={slides} current={current} />}
        {type.includes('textbox') && <CarouselTextbox slides={slides} current={current} />}
      </div>
    </div>
  );
};

export default MainCarousel;
