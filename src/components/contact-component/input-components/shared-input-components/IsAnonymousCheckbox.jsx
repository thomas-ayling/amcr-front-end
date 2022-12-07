import React from 'react';

const IsAnonymousCheckbox = ({ setIsAnonymous }) => {
  return (
      <>
      <input type='checkbox' id='is-anonymous-input' onChange={(e) => setIsAnonymous(e.target.checked)} />
      <label htmlFor="is-anonymous-input">Anonymous</label>

      </>
  );
};

export default IsAnonymousCheckbox;
