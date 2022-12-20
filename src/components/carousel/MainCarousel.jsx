import "../carousel/MainCarousel.css";
import { useEffect, useState } from "react";
import CarouselCards from "./shared-components/CarouselCards";
import CarouselTextbox from "./shared-components/CarouselTextbox";

//main functionality for the carasousel and touch controls

const MainCarousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 100; //distance on when a user swipes
  const slideRight = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }; //slide left and right functions - right is used for both the timer and touch events while left is only for touch events

  useEffect(() => {
    let timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 5000);
    return () => clearTimeout(timeOut);
  });

  let timeOut = null;
  const handleClick = (index) => {
    setCurrent(index);
    clearTimeout(timeOut);
  };
  const paginationDots = images.map((img, index) => (
    <div className={index === current ? "pagination_dot pagination_dot-active" : "pagination_dot"} onClick={() => handleClick(index)}></div>
  ));

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    clearTimeout(timeOut);
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

    const isLeftSwipe = distance > minSwipeDistance;

    if (isLeftSwipe) {
      slideLeft();
    } else {
      slideRight();
    }
  };

  const handleMouseEnter = () => {
    setAutoPlay(false);
    clearTimeout(timeOut);
  };

  return (
    <div className='carousel-background'>
      <div
        className='carousel'
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setAutoPlay(true)}
      >
        <div className='carousel_wrapper'>
          <CarouselCards images={images} current={current} paginationDots={paginationDots} />
        </div>
        <div className='carousel_wrapper_second'>
          <CarouselTextbox images={images} current={current} />
        </div>
      </div>
    </div>
  );
};

export default MainCarousel;
