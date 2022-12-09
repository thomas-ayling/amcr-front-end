import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Diagram.css';
import diagramArray from './diagramArray';
import Option from '../Option';

import Empty from './DiagramPages/Empty';

export default function Diagram1() {
  const [nodeNumber, setNodeNumber] = useState(3);
  const [nodeId, setNodeId] = useState(1);
  const [nodeTitle, setNodeTitle] = useState('Title');
  const [nodeBody, setNodeBody] = useState('Body');
  const [firstArrow, setFirstArrow] = useState(true);

  let nodeArray = [];
  let allNodeOptions = [];
  useEffect(() =>{
    nodeArray = [];
    for (let i = 1; i <= nodeNumber; i++) {
        nodeArray.push(`${i}`);
    }
    console.log(nodeArray);
    allNodeOptions = nodeArray.map((node) => <h1 key={node} value={node}>{node}</h1>);
    console.log(allNodeOptions);
}, [nodeNumber])

// const boxElements = boxes.map(element => (
//     <Box key={element.id} id={element.id} toggle={toggle} on={element.on}/> 
// ));
  
  function changeNodeNumber(e) {
    setNodeNumber(e.target.value);
    //go back to init
  }

//   function handleNodeNumberChange(e) {
//     setNodeNumber(e.target.value);
//     nodeArray = [];
//     for (let i = 1; i <= nodeNumber; i++) {
//         nodeArray.push(i);
//     }
//     console.log(nodeArray);
//     allNodeOptions = nodeArray.map((node) => <option value={node}>{node}</option>);
//     console.log(allNodeOptions);
//   }

   

  return (
    <>
      <div className='number--dropdown'>
        <label htmlFor='nodeNumber'>Choose number of nodes</label>
        <select id='nodeNumber' value={nodeNumber} name='nodeNumber' onChange={(e) => changeNodeNumber(e)}>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>
        </select>
        {allNodeOptions}
        <label htmlFor='nodeNumber2'>Choose node</label>
        <select id='nodeNumber2' value={nodeId} name='nodeId' onChange={(e) => setNodeId(e.target.value)}>
            {allNodeOptions}
          
        </select>
      </div>
      <div className='grid--container'>
        {/* <Empty/>
                {<div className='grid--item grid--row'>{row}</div>}
                <div className='grid--item grid--ta-lr'></div>
                <div className='grid--item grid--ta-rl'></div>
                <div className='grid--item grid--row-rev'>{reverseRow}</div>
                <div className='grid--item grid--ba-lr'></div>
                <div className='grid--item grid--ba-rl'></div>
                <div className='grid--item grid--row'>{row}</div>
                <Empty /> */}
        {/* <Grid number={nodeNumber}/> */}
      </div>
    </>
  );
}
