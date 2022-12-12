import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Diagram.css';
import Grid from './DiagramPages/Grid';
import Popover from './DiagramPages/Popover';

export default function Diagram() {
  const [totalNum, setTotalNum] = useState(3);
  const [currentNode, setCurrentNode] = useState(1);
  const [nodeTitle, setNodeTitle] = useState('');
  const [nodeBody, setNodeBody] = useState('');

  // function changeNodeNumber(number) {
  //   setTotalNum(number);
  //   let tempArray = [];
  //   for (let i = 1; i <= totalNum; i++) {
  //     tempArray.push(i);
  //   }
  //   const test = [...array, 3];
  //   tempArray.map((e) => setArray((prevArray) => [...prevArray, e]));
  // }

  return (
    <div>
      <div className='dropdown--container'>
        <div>
          <label className='dropdown--label' htmlFor='nodetotalNumber'>
            Total number of nodes:
          </label>
          <select id='nodetotalNumber' className='dropdown--select' name='nodetotalNumber' value={totalNum} onChange={(e) => setTotalNum(e.target.value)}>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            <option value='6'>6</option>
            <option value='7'>7</option>
            <option value='8'>8</option>
            <option value='9'>9</option>
          </select>
        </div>
        <div>
          <label className='dropdown--label' htmlFor='currentNode'>
            Currently editing node:
          </label>
          <select id='currentNode' className='dropdown--select' name='currentNode' value={currentNode} onChange={(e) => setCurrentNode(e.target.value)}>
            {Array(Number(totalNum))
              .fill()
              .map((_, i) => (
                <option value={i+1} key={i}>{i+1}</option>
              ))}
          </select>
        </div>
      </div>

      <div className='popup-container'>
        <div className='title--input'>
          <textarea className='builder--textarea builder--textarea-title' value={nodeTitle} placeholder='Title' onChange={(e) => setNodeTitle(e.target.value)} />
        </div>
        <div className='body--input'>
          <textarea className='builder--textarea builder--textarea-body' value={nodeBody} placeholder='Content' onChange={(e) => setNodeBody(e.target.value)} />
        </div>
      </div>
      <Grid totalNum={totalNum} currentNode={currentNode} title={nodeTitle} body={nodeBody}/>
    </div>
  );
}
