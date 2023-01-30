import React from 'react';
import { useNavigate } from 'react-router-dom';

const ImageSlider = ({ current, windowWidth, pageData }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    windowWidth > 1100 && navigate(`/case-study/${pageData[current].id}`);
  };

  const imageSlider = pageData.map((item, index) => (
    <div className={index === current ? 'case-study-image-slide case-study-image-active' : 'case-study-image-slide'} key={index}>
      {index === current && <img className='case-study-image' src={item.coverImageLink} alt={`carousel-{index}`} onClick={handleClick} />}
    </div>
  ));

  return imageSlider;
};

export default ImageSlider;
