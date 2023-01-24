import React, { useRef } from 'react';
import Slider from 'react-slick';

import './ContactsMainCarousel.css';
import './slick-css-files/slick.css';
import './slick-css-files/slick-theme.css';

import ContactsCarouselCard from './ContactsCarouselCard';
import contactsTeamData from '../../../service/ContactsMainCarouselMockService';
import { StyledHr } from '../../../styles/styles';
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi';

const ContactsMainCarousel = () => {
  const slider = useRef();
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
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='contacts-carousel'>
      <Slider ref={slider} {...settings}>
        {contactsTeamData.map((elem, i) => (
          <ContactsCarouselCard index={i} image={elem.image} name={elem.name} title={elem.title} description={elem.description} />
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
};

export default ContactsMainCarousel;
