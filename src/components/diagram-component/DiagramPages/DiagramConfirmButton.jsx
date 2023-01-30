import React from 'react';

const DiagramConfirmButton = ({ updateContent }) => {
  return (
    <div className='diagram-submit-button-container'>
      <button className='diagram-submit-button' onClick={updateContent}>
        Confirm Changes
      </button>
    </div>
  );
};

export default DiagramConfirmButton;
