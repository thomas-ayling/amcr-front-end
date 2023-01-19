import React from 'react';
import Popover from '../Popover';

const ArrowLeftRight = ({ currentNode, nodeArray, id }) => {
  return (
    <>
      <div className='diagram-arrow-line' />
      <div className='diagram-arrow-lr-triangle' />
      {id > 3 ? <Popover currentNode={currentNode} nodeArray={nodeArray} id={id} /> : null}
    </>
  );
};

export default ArrowLeftRight;
