import './MainCarousel.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CarouselCards from '../shared-carousel-components/CarouselCards';
import CarouselTextbox from '../shared-carousel-components/CarouselTextbox';
import CarouselTitles from '../shared-carousel-components/CarouselTitles';

//main functionality for the carasousel and touch controls

const MainCarousel = ({ slides, type, isLink, classNames }) => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const navigate = useNavigate();

  let timeOut = null;
  const minSwipeDistance = 100; //distance on when a user swipes

  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 5000);
    return () => clearTimeout(timeOut);
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

  const onTouchEnd = () => {
    //makes sure only swipes are registered
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    isLeftSwipe && slideLeft();

    isRightSwipe && slideRight();
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleMouseEnter = () => {
    setAutoPlay(false);
    clearTimeout(timeOut);
  };

  const handleClickLink = (id) => {
    navigate(`case-studies/${id}`);
  };

  return (
    <div className='carousel-container'>
      <div
        className='carousel-inner'
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setAutoPlay(true)}
      >
        <div className='slide-wrapper'>
          <CarouselCards slides={slides} current={current} setCurrent={setCurrent}  />
        </div>
        {type === 'header' ? (
          <div className='title-wrapper'>
            <CarouselTitles slides={slides} current={current} isLink={isLink} handleClickLink={handleClickLink} classNames={classNames} />
          </div>
        ) : (
          <div className='textbox-wrapper'>
            <CarouselTextbox slides={slides} current={current} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MainCarousel;
