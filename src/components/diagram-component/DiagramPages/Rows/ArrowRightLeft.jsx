import React from 'react';
import Popover from '../Popover';

const ArrowRightLeft = ({ currentNode, nodeData, id }) => {
  return (
    <>
      <div className='diagram-arrow-line' />
      <div className='diagram-arrow-rl-triangle' />
      <Popover currentNode={currentNode} nodeData={nodeData} id={id} />
    </>
  );
};

export default ArrowRightLeft;
