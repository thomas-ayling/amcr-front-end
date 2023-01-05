import "../carousel/HomepageHeaderCarousel.css"
import { useEffect, useState } from "react";

function HomepageHeaderCarousel({images}) {
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
    } else if (isRightSwipe){
      slideRight();
    }
  };

  const handleMouseEnter = () => {
    setAutoPlay(false);
    clearTimeout(timeOut);
  };
        
    return (
        <div className="hph-carousel-background">
          <div className="hph-carousel"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setAutoPlay(true)}
      >
    
            <div className="hph-carousel_wrapper">
             {images.map((image, index)=>{
                return( <div key={index} className={index===current ? "hph-carousel_card hph-carousel_card-active" : "hph-carousel_card"} >
                <div className="homepage-header-carouselTitle"><p>GlobalLogic UK&I</p></div>
                <img className="hph-card_image"src={image.image} alt =""/>
                <div className="hph-card_overlay">
                    </div>
                         <div className="hph-carousel_pagination">
                             {images.map((_,index)=>{
                                return(
                                <div key={index}
                                    className={index === current ? "hph-pagination_dot hph-pagination_dot-active" : "hph-pagination_dot"
                                    }
                                    
                                onClick={() => setCurrent(index) && clearTimeout(timeOut)}
                              
                                ></div>
                                
                                )
                        })}
                        </div>
                   
                    </div>
  

            )})}


            </div>
                
        </div>

        
    </div>
  )
  
}

export default HomepageHeaderCarousel