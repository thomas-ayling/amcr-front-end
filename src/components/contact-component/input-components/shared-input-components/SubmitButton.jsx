import React from 'react';
import Loader from './Loader';

const SubmitButton = ({ awaiting, status }) => {
  let buttonValue = status === 'error' ? 'Try again' : status === 'success' ? 'Sent!' : 'Submit'
  return (
    <div className='submit-button-container'>
      <Loader display={awaiting} />
      <input data-tip data-for='button-tooltip' type='submit' className={`submit-button contact-form-input ${status}`} value={buttonValue} />
    </div>
  );
};

export default SubmitButton;
