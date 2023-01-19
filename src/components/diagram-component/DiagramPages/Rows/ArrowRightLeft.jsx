import React from 'react';
import Popover from '../Popover';

const ArrowRightLeft = ({ currentNode, nodeArray, id }) => {
  return (
    <>
      <div className='diagram-arrow-line' />
      <div className='diagram-arrow-rl-triangle' />
      <Popover currentNode={currentNode} nodeArray={nodeArray} id={id} />
    </>
  );
};

export default ArrowRightLeft;
