import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';

import './ContactsMainCarousel.css';
import './slick-css-files/slick.css';
import './slick-css-files/slick-theme.css';

import ContactsCarouselCard from './ContactsCarouselCard';
import LoaderGif from '../../shared-components/LoaderGif';
import { StyledHr } from '../../../styles/styles';
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { getSpotlit } from '../../../service/ContactsCarouselService';
import { runToastNotification } from '../../toast-notification/ToastNotification';

const ContactsMainCarousel = () => {
  const slider = useRef();

  const [carouselData, setCarouselData] = useState();
  const [requestStatus, setRequestStatus] = useState('');

  useEffect(() => {
    getSpotlit(setCarouselData, setRequestStatus);
  }, []);

  useEffect(() => {
    if (requestStatus === 'error-404') runToastNotification(`Carousel data not found!`, 'error');
    else if (requestStatus === 'other-error') runToastNotification('Could not load carousel data!', 'error');
  }, [requestStatus]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1270,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (requestStatus.includes('success'))
    return (
      <div className='contacts-carousel'>
        <Slider ref={slider} {...settings}>
          {carouselData.map((elem, i) => (
            <ContactsCarouselCard index={i} image={elem.imageLink} name={elem.fullName} title={elem.title} description={elem.description} />
          ))}
        </Slider>
        <div className='contacts-carousel-arrows'>
          <div className='contacts-carousel-arrow-left'>
            <HiOutlineArrowNarrowLeft size={90} onClick={() => slider.current.slickPrev()} />
          </div>
          <div className='contacts-carousel-arrow-right'>
            <HiOutlineArrowNarrowRight size={90} onClick={() => slider.current.slickNext()} />
          </div>
        </div>
        <StyledHr />
      </div>
    );
  if (requestStatus.includes('success')) {
    return <LoaderGif />;
  }
};

export default ContactsMainCarousel;
