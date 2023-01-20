import React from 'react';
import DiagramDropdown from './DiagramDropdown';
import DiagramTextarea from './DiagramTextarea';

const DiagramAdminChanges = ({ totalNum, setTotalNum, currentNode, setCurrentNode, nodeArray, setNodeArray }) => {
  return (
    <>
      <div className='diagram-dropdown-container'>
        <DiagramDropdown id={'nodeTotalNumber'} totalNum={totalNum} setTotalNum={setTotalNum} />
        <DiagramDropdown id={'currentNode'} currentNode={currentNode} setCurrentNode={setCurrentNode} totalNum={totalNum} />
      </div>

      <div className='diagram-popup-inputs'>
        <DiagramTextarea type={'title'} nodeArray={nodeArray} setNodeArray={setNodeArray} currentNode={currentNode} />
        <DiagramTextarea type={'body'} nodeArray={nodeArray} setNodeArray={setNodeArray} currentNode={currentNode} />
      </div>
    </>
  );
};

export default DiagramAdminChanges;
