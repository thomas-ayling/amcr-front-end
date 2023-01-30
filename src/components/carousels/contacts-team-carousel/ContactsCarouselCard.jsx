import React, { useState } from 'react';
import { StyledHr } from '../../../styles/styles';
import MarkdownComponent from '../../markdown-component/MarkdownComponent';

const ContactsCarouselCard = ({ image, name, title, description, adminEnabled, handleClick }) => {
  const [classStyle, setClassStyle] = useState('contacts-carousel-card-border');
  const [selected, setSelected] = useState(true);
  const selectCard = () => {
    if (adminEnabled) {
      setSelected(!selected);
      selected ? setClassStyle('contacts-carousel-card-border contacts-carousel-card-border-selected') : setClassStyle('contacts-carousel-card-border');
      handleClick(name, title, description);
    }
  };
  return (
    <div className={classStyle} onClick={selectCard}>
      <div className='contacts-carousel-card-container'>
        <div className='contacts-carousel-card-image-container'>
          <img className='contacts-carousel-card-image' src={image} alt={`${name} image`} />
        </div>
        <div className='contacts-carousel-card-information-container'>
          <div className='contacts-carousel-card-name'>
            <b>{name}</b>
          </div>
          <div className='contacts-carousel-card-title'>
            <b>{title}</b>
          </div>
          <StyledHr />
          <div className='contacts-carousel-card-description'>
            <MarkdownComponent markdownText={description} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactsCarouselCard;
