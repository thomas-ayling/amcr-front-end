import React from 'react';
import Popover from '../Popover';

const ArrowLeftRight = ({ title, body, currentNode, id }) => {
  return (
    <>
      <div className='diagram-arrow-line' />
      <div className='diagram-arrow-lr-triangle' />
      {id > 3 ? <Popover title={title} body={body} currentNode={currentNode} id={id} /> : null}
    </>
  );
};

export default ArrowLeftRight;
