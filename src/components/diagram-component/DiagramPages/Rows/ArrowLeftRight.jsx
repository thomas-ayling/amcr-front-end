import React from 'react';
import Popover from '../Popover';

const ArrowLeftRight = ({ currentNode, nodeData, id }) => {
  return (
    <>
      <div className='diagram-arrow-line' />
      <div className='diagram-arrow-lr-triangle' />
      {id > 3 ? <Popover currentNode={currentNode} nodeData={nodeData} id={id} /> : null}
    </>
  );
};

export default ArrowLeftRight;
