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
      timeOut =
        autoPlay &&
        setTimeout(() => {
          slideRight();
        }, 5000);
    }
    //timer function- disables error as timer doesn't need to be stored
  );

  const slideRight = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }; // slide right and current checks what image it is on - it will go back to one if it reaches the end

  const handleMouseEnter = () => {
    setAutoPlay(false);
    clearTimeout(timeOut);
  };

  return (
    <div className='carousel-background'>
      <div className='carousel' onMouseEnter={handleMouseEnter} onMouseLeave={() => setAutoPlay(true)}>
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
