import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Diagram.css';
import diagramArray from './diagramArray';
import Option from '../Option';

import Empty from './DiagramPages/Empty';
import Grid from './DiagramPages/Grid';

export default function Diagram2() {
  const [array, setArray] = useState([]);
  const [num, setNum] = useState(3);
  const [currentNode, setCurrentNode] = useState(1);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const [nodeContent, setNodeContent] = useState({
    id: 1,
    title: '',
    body: '',
  });

  useEffect(() => {
    document.getElementById('currentNode').innerHTML = '';
    add(num);
    console.log(`Number of nodes: ${num}`);
  }, [num]);

  useEffect(() => {
    console.log(`Current node: ${currentNode}`);
  }, [currentNode]);

  function add(node) {
    setNum(node);
    let tempArray = [];
    for (let i = 1; i <= num; i++) {
      tempArray.push(i);
    }
    tempArray.map((e) => setArray((prevArray) => [...prevArray, e]));
    console.log(tempArray);
  }

  const arrayElements = array.map((node) => (
    <option key={node} value={node}>
      {node}
    </option>
  ));

  const popupItem = (
    <Popup trigger={<button className='round--btn'></button>} position='top center' on={['hover', 'focus']} contentStyle={{ width: '350px' }}>
      <div className='popup-container'>
        <div className='popup-title'>{title}</div>
        <div className='popup-body'>{body}</div>
      </div>
    </Popup>
  );

  const arrowLR = (
    <>
      <div className='arrow--line' />
      <div className='triangle--lr' />
    </>
  );

  const arrowRL = (
    <>
      <div className='arrow--line' />
      <div className='triangle--rl' />
    </>
  );

  const row = (
    <div className='row--component'>
      {popupItem}
      {arrowLR}
      {popupItem}
      {arrowLR}
      {popupItem}
    </div>
  );

  const reverseRow = (
    <div className='reverse--row--component'>
      {popupItem}
      {arrowRL}
      {popupItem}
      {arrowRL}
      {popupItem}
    </div>
  );

  const empty = <div className='grid--item grid--empty'></div>;

  return (
    <div>
      <div className='dropdown--container'>
        <div>
          <label className='dropdown--label' htmlFor='nodeNumber'>
            Total number of nodes:
          </label>
          <select id='nodeNumber' className='dropdown--select' name='nodeNumber' onChange={(e) => setNum(e.target.value)}>
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
          <select id='currentNode' className='dropdown--select' name='currentNode' onChange={(e) => setCurrentNode(e.target.value)}>
            {arrayElements}
          </select>
        </div>
      </div>

      <div className='popup-container'>
        <div className='title--input'>
          <textarea className='builder--textarea builder--textarea-title' value={title} placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className='body--input'>
          <textarea className='builder--textarea builder--textarea-body' value={body} placeholder='Content' onChange={(e) => setBody(e.target.value)} />
        </div>
      </div>

      <Grid number={num} currentNode={currentNode} title={title} body={body}/>
    </div>
  );
}
