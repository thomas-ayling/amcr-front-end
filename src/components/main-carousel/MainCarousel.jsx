import './MainCarousel.css';
import { useEffect, useRef, useState } from 'react';
import CarouselTextbox from './shared-carousel-components/CarouselTextbox';
import CarouselTitles from './shared-carousel-components/CarouselTitles';

const MainCarousel = ({ slides, type, isLink, classNames }) => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 75; //distance on when a user swipes

  let timeOut = useRef(null);
 
  useEffect(() => {
    timeOut.current =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 5000);
    return () => clearTimeout(timeOut.current);
  });

  const slideLeft = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  }; //slide left and right functions - right is used for both the timer and touch events while left is only for touch events

  const slideRight = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setAutoPlay(false); //clears timer/autoplay when user touches the carousel
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    //makes sure only swipes are registered
    if (!touchStart || !touchEnd) return;

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
    clearTimeout(timeOut.current);
  };

  // Internal Components
  const CarouselCards = ({ slides, current, setCurrent, isLink, handleClickLink  }) => {
    return (
      <div className='textbox-wrapper'>
        {slides.map((carousel, index) => (
              <div details={index} key={index} className={index === current ? 'carousel-card carousel-card-active' : 'carousel-card'} onClick={() => {isLink && handleClickLink(carousel.id)}}>
            <img className='card-image' src={carousel.image} alt='' />
            <div className='card-overlay'></div>
            {type.includes('textbox') && <SlideDots slides={slides} current={current} setCurrent={setCurrent} />}
            {type.includes('header-multi') && <SlideDots slides={slides} current={current} setCurrent={setCurrent} />}
            {type.includes('header-single') && <div></div>}
          </div>
        ))}
  
      </div>
    );
  };

  const SlideDots = ({ slides, current, setCurrent }) => {
    return (
      <div className='slide-dots'>
        {slides.map((_, index) => (
          <div key={index} className={index === current ? 'pagination-dot pagination-dot-active' : 'pagination-dot'} onClick={() => setCurrent(index)}></div>
        ))}
      </div>
    );
  };

  const containerClassNames = `${type.includes('header') && 'header-carousel'} ${type.includes('textbox') && 'textbox-carousel'}`;

  return (
    <div className={`carousel-container ${containerClassNames}`}>
      <div className='carousel-inner' onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} onMouseEnter={handleMouseEnter} onMouseLeave={() => setAutoPlay(true)}>
        <CarouselCards slides={slides} current={current} setCurrent={setCurrent} />
        {type.includes('header') && <CarouselTitles slides={slides} current={current} isLink={isLink} classNames={classNames} />}
        {type.includes('textbox') && <CarouselTextbox slides={slides} current={current} />}
      </div>
    </div>
  );
};

export default MainCarousel;
