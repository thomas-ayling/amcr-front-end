import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GiStairsGoal, GiBullseye, GiFizzingFlask } from 'react-icons/gi';
import { BsGearWideConnected } from 'react-icons/bs';
import './contentSection.css';

const ContentSection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [imageSize, setImageSize] = useState(45);

  useEffect(() => {
    windowWidth > 551 ? setImageSize(45) : windowWidth > 365 ? setImageSize(30) : windowWidth > 300 ? setImageSize(25) : setImageSize(50);
  }, [windowWidth]);

  const resizeObserver = new ResizeObserver((entries) => {
    setWindowWidth(entries[0].contentRect.width);
  });

  resizeObserver.observe(document.body);
  return (
    <div className='content-section-container'>
      <div className='content-section-wrapper'>
        <div className='content-section-icons-container'>
          <div className='content-section-element'>
            <Link to='/engineering-excellence'>
              <BsGearWideConnected size={imageSize} className='content-section-element-icon content-section-element-icon-engineering' />
              <span className='content-section-element-text'>Engineering Excellence</span>
            </Link>
          </div>{' '}
          <div className='content-section-element'>
            <Link to='/employee-journey'>
              <GiStairsGoal size={imageSize} className='content-section-element-icon content-section-element-icon-employee' />
              <span className='content-section-element-text'>Employee Journey</span>
            </Link>
          </div>{' '}
          <div className='content-section-element'>
            <Link to='/charter-and-okrs'>
              <GiBullseye size={imageSize} className='content-section-element-icon content-section-element-icon-charter' />
              <span className='content-section-element-text'>Charter & OKRs</span>
            </Link>
          </div>{' '}
          <div className='content-section-element'>
            <Link to='/lab-science-decks'>
              <GiFizzingFlask size={imageSize} className='content-section-element-icon content-section-element-icon-lab' />
              <span className='content-section-element-text'>Lab Science Decks</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
