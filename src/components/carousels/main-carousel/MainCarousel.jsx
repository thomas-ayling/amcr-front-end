import "./MainCarousel.css";
import { useEffect, useRef, useState } from "react";
import CarouselTextbox from "./shared-carousel-components/CarouselTextbox";
import CarouselTitles from "./shared-carousel-components/CarouselTitles";
import Loader from "../../contact-component/input-components/shared-input-components/Loader";

const MainCarousel = ({ slideData, type, isLink }) => {
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
      }, 1000);
    return () => clearTimeout(timeOut.current);
  }, []);

  const slideLeft = () => {
    if (type.includes("header-single")) {
      console.log("single pringle")
    } else {setCurrent(current === 0 ? slideData.length - 1 : current - 1);}
  }; //slide left and right functions - right is used for both the timer and touch events while left is only for touch events

  const slideRight = () => {
    if (type.includes("header-single")) {
      console.log("single pringle")
  } else {setCurrent(current === slideData.length - 1 ? 0 : current + 1);}
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
  const CarouselCards = ({ slideData, current, setCurrent, isLink, handleClickLink }) => {
    return (
      <div className='textbox-wrapper'>
        {slideData.map((carousel, index) => (
          <div
            details={index}
            key={index}
            className={index === current ? "carousel-card carousel-card-active" : "carousel-card"}
            onClick={() => {
              isLink && handleClickLink(carousel.id);
            }}
          >
            {type.includes("textbox") && <div className="single-linear-gradient-overlay"></div>}
            {type.includes("header-single") && <div className="single-linear-gradient-overlay"></div>}
            {type.includes("header-multi") && <div className="multi-linear-gradient-overlay"></div>}
            <img className='card-image' src={carousel.imageLinks} alt='' />
            <div className='card-overlay'></div>
            {type.includes("textbox") && <SlideDots slideData={slideData} current={current} setCurrent={setCurrent} />}
            {type.includes("header-multi") && <SlideDots slideData={slideData} current={current} setCurrent={setCurrent} />}
            {type.includes("header-single") && <div></div>}
          </div>
        ))}
      </div>
    );
  };

  const SlideDots = ({ slideData, current, setCurrent }) => {
    return (
      <div className='slide-dots'>
        {slideData.map((_, index) => (
          <div key={index} className={index === current ? "pagination-dot pagination-dot-active" : "pagination-dot"} onClick={() => setCurrent(index)}></div>
        ))}
      </div>
    );
  };

  const containerClassNames = `${type.includes("header") && "header-carousel"} ${type.includes("textbox") && "textbox-carousel"}`;
  if (slideData) {
    return (
      <div className={`carousel-container ${containerClassNames}`}>
        <div
          className='carousel-inner'
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={() => setAutoPlay(true)}
        >
          <CarouselCards slideData={slideData} current={current} setCurrent={setCurrent} />
          {type.includes("header") && <CarouselTitles slideData={slideData} current={current} isLink={isLink} type={type} />}
          {type.includes("header-single") && <CarouselTitles slideData={slideData} current={current} isLink={isLink} type={type} />}
          {type.includes("header-multi") && <CarouselTitles slideData={slideData} current={current} isLink={isLink} type={type} />}
          {type.includes("textbox") && <CarouselTextbox slideData={slideData} current={current} type={type} />}
        </div>
      </div>
    );
  } return <Loader/>
};

export default MainCarousel;
