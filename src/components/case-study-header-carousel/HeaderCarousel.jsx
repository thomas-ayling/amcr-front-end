// import '../carousel/MainCarousel.css';
import '../case-study-header-carousel/HeaderCarousel.css';

import { useEffect, useState } from 'react';
import ImageLink from './ImageComponent';
import CarouselTextbox from '../carousel/shared-components/CarouselTextbox';

function CaseStudiesHeaderCarousel({ images }) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 100; //distance on when a user swipes

  const currentUrl = images.link;
  const slideRight = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
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

  const paginationDots = images.map((img, index) => (
    <div className={index === current ? "pagination_dot pagination_dot-active" : "pagination_dot"} onClick={() => setCurrent(index)}></div>
  ));

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

    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      slideLeft();
    } else if (isRightSwipe) {
      slideRight();
    }
  };

  const handleMouseEnter = () => {
    setAutoPlay(false);
    clearTimeout(timeOut);
  };

  

  return (
    <div className='cs-header-carousel-container'>
      <div
        className='cs-header-carousel'
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setAutoPlay(true)}
      >
        <div className='cs-header-carousel_wrapper'>
          {images.map((image, index) => {
            return (
              
              <div key={index} className={index === current ? 'cs-header-carousel_card cs-header-carousel_card-active' : 'cs-header-carousel_card'}>
                <h1 className='cs-header-carousel-card_image:hover'></h1>
                <a href={currentUrl} >
                  <img className='cs-header-carousel_image' src={image.image} alt=''/></a>
                  
                  <a href={image.page} >
                  <h1>{image.title}</h1>
                  </a>
                  
                  
                  {/* <ImageLink current={current} currentUrl={currentUrl} dataArray={CaseStudyHeaderCarouselImages}/> */}
                <div className='cs-header-carousel_overlay' ></div>
                <div className='cs-header-carousel_pagination'>
                  {images.map((_, index) => {
                    return <div key={index} className={index === current ? 'cs-header-carousel-pagination_dot cs-header-carousel-pagination_dot-active' : 'cs-header-carousel-pagination_dot'} onClick={() => setCurrent(index) && clearTimeout(timeOut)}></div>;
                  })}
                </div>
              </div>
              
            );
          })}
          
        </div>
        
        
      </div>
    </div>
  );
}

export default CaseStudiesHeaderCarousel;