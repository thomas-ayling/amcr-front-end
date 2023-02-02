import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

const ContentSectionElement = ({ linkRef, title }) => {
  return (
    <div className='content-section-element'>
      <Link to={linkRef}>
        <FaPlus size={40} className='content-section-element-icon' />
      </Link>
      <span className='content-section-element-text'>{title}</span>
    </div>
  );
};

export default ContentSectionElement;
