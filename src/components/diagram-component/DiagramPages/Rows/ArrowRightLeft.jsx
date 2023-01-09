import React from 'react';
import Popover from '../Popover';

const ArrowRightLeft = ({ title, body, currentNode, id }) => {
  return (
    <>
      <div className='diagram-arrow-line' />
      <div className='diagram-arrow-rl-triangle' />
      <Popover title={title} body={body} currentNode={currentNode} id={id} />
    </>
  );
};

export default ArrowRightLeft;
