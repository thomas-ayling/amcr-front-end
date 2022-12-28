import '../carousel/MainCarousel.css';
import { useEffect, useState } from 'react';

function MainCarousel({ images }) {
  const [current, setCurrent] = useState(0);

  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  useEffect(
    () => {
     let timeOut =
        autoPlay &&
        setTimeout(() => {
          slideRight();
        }, 5000);
        return () => clearTimeout(timeOut);
    }
   
  );

  const slideRight = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  

  return (
    <div className='b-carousel-background'>
      <div
        className='b-carousel'
        onMouseEnter={() => {
          setAutoPlay(false);
          clearTimeout(timeOut);
        }}
        onMouseLeave={() => {
          setAutoPlay(true);
        }}
      >
        <div className='b-carousel_wrapper'>
          {images.map((image, index) => {
            return (
              <div key={index} className={index === current ? 'b-carousel_card b-carousel_card-active' : 'b-carousel_card'}>
                <img className='b-card_image' src={image.image} alt='' />
                <div className='b-card_overlay'></div>
                <div className='b-carousel_pagination'>
                  {images.map((_, index) => {
                    return <div key={index} className={index === current ? 'b-pagination_dot b-pagination_dot-active' : 'b-pagination_dot'} onClick={() => setCurrent(index) && clearTimeout(timeOut)}></div>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div className='b-carousel_wrapper_second'>
          {images.map((image, index) => {
            return (
              <div key={index} className={index === current ? 'b-carousel_card_textbox2 b-carousel_card_textbox-active' : 'b-carousel_card_textbox2'}>
                <div className='b-card_text'>
                  <h1 className='b-card_title'>{image.title}</h1>
                  <h2 className='b-card_title2'>{image.overview.substring(0, 300)}</h2>
                  <h3 className='b-card_title2'>{image.description}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MainCarousel;
