import '../carousel/MainCarousel.css';
import { useEffect, useState } from 'react';
import CarouselCards from './shared-components/CarouselCards';
import CarouselTextbox from './shared-components/CarouselTextbox';



const MainCarousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  

  let timeOut = null;

  const paginationDots = images.map((img, index) => <div className={index === current ? 'pagination_dot pagination_dot-active' : 'pagination_dot'} onClick={() => setCurrent(index) && clearTimeout(timeOut)}></div>);

  useEffect(
    () => {
     let timeOut =
        autoPlay &&
        setTimeout(() => {
          slideRight();
        }, 5000);
        return () => clearTimeout(timeOut);
    }
    //timer function- disables error as timer doesn't need to be stored
  );

  const slideRight = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }; // slide right and current checks what image it is on - it will go back to one if it reaches the end

  const slideLeft = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }

  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const minSwipeDistance = 100

  const onTouchStart = (e) => {
    setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX)
    clearTimeout(timeOut)
    setAutoPlay(false)
  
  }
  
  const onTouchMove = (e) =>{ setTouchEnd(e.targetTouches[0].clientX)
      
      
  }
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) 
      return
    
    const distance = touchStart - touchEnd 
    
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
   

    if (isLeftSwipe){
      slideLeft();
      
     
    }


    if (isRightSwipe){
      slideRight();
    }


   
  }
  

  const handleMouseEnter = () => {
    setAutoPlay(false);
    clearTimeout(timeOut);
  };

  return (
    <div className='carousel-background'>
      <div className='carousel' onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} onMouseEnter={handleMouseEnter} onMouseLeave={() => setAutoPlay(true)}>
        <div className='carousel_wrapper'>
          <CarouselCards images={images} current={current} paginationDots={paginationDots} />
          
        </div>
        <div className='carousel_wrapper_second'>
          <CarouselTextbox images={images} current={current}/>
          
        </div>
      </div>
    </div>
  );
};

export default MainCarousel;
