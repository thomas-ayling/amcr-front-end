import React from 'react';
import { Link } from 'react-router-dom';
import { FaWikipediaW } from 'react-icons/fa';
import './contentSection.css';

const ContentSection = () => {
  return (
    <div className='content-section-container'>
      <div className='content-section-wrapper'>
        <div className='content-section-icons-container'>
          <div className='content-section-span'>
            <Link to={'/engineering-excellence'}>
              <FaWikipediaW size={46} className='content-section-icons' />
            </Link>
            <span className='content-section-space-between-icon-and-text'>Engineering Excellence</span>
          </div>

          <div className='content-section-span'>
            <Link to={'/employee-journey'}>
              <FaWikipediaW size={46} className='content-section-icons' />
            </Link>
            <span className='content-section-space-between-icon-and-text'>Employee Journey</span>
          </div>

          <div className='content-section-span'>
            <Link to={'/charter-and-okrs'}>
              <FaWikipediaW size={46} className='content-section-icons' />
            </Link>
            <span className='content-section-space-between-icon-and-text'>Charter & OKRs</span>
          </div>

          <div className='content-section-span'>
            <Link to={'/lab-science-decks'}>
              <FaWikipediaW size={46} className='content-section-icons' />
            </Link>
            <span className='content-section-space-between-icon-and-text'>Lab Science Decks</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
