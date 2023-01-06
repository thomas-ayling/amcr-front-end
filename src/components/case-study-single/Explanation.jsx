import React from 'react';

const Explanation = ({ explanation }) => {
  const explanationElements = explanation.map((item, index) => {
    console.log(typeof item);
    console.log(item)
  });

  return explanationElements;
};

export default Explanation;
