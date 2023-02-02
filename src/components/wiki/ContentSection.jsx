import React from 'react';
import ContentSectionElement from './ContentSectionElement';
import { Link } from 'react-router-dom';
import { FaWikipediaW, FaPlus } from 'react-icons/fa';
import './contentSection.css';

const ContentSection = () => {
  return (
    <div className='content-section-container'>
      <div className='content-section-wrapper'>
        <div className='content-section-icons-container'>
          <ContentSectionElement linkRef={'/engineering-excellence'} title={'Engineering Excellence'} />
          <ContentSectionElement linkRef={'/employee-journey'} title={'Employee Journey'} />
          <ContentSectionElement linkRef={'/charter-and-okrs'} title={'Charter & OKRs'} />
          <ContentSectionElement linkRef={'/lab-science-decks'} title={'Lab Science Decks'} />
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
