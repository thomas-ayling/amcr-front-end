import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Diagram.css';
import diagramArray from './diagramArray';
import Option from '../Option';

import Empty from './DiagramPages/Empty';

export default function Diagram2() {
  const [array, setArray] = useState([]);
  const [num, setNum] = useState(3);
  const [currentNode, setCurrentNode] = useState();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const [nodeContent, setNodeContent] = useState({
    id: 1,
    title: '',
    body: '',
  });

  useEffect(() => {
    document.getElementById('pleasework').innerHTML = '';
    add(num);
  }, [num]);

  function add(node) {
    setNum(node);
    let tempArray = [];
    for (let i = 1; i <= num; i++) {
      tempArray.push(i);
    }
    tempArray.map((e) => setArray((prevArray) => [...prevArray, e]));
  }

  const arrayElements = array.map((node) => (
    <option key={node} value={node}>
      {node}
    </option>
  ));
  return (
    <div>
      <label htmlFor='nodeNumber'>Choose number of nodes</label>
      <select id='nodeNumber' name='nodeNumber' onChange={(e) => setNum(e.target.value)}>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
        <option value='6'>6</option>
        <option value='7'>7</option>
        <option value='8'>8</option>
        <option value='9'>9</option>
      </select>

      <label htmlFor='pleasework'>Text</label>
      <select id='pleasework' name='nodeNumber' onChange={(e) => setCurrentNode(e.target.value)}>
        {arrayElements}
      </select>

      <div className='popup-container'>
        <div className='title--input'>
          <textarea className='builder--textarea builder--textarea-title' placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className='body--input'>
          <textarea className='builder--textarea builder--textarea-body' placeholder='Content' onChange={(e) => setBody(e.target.value)} />
        </div>
      </div>
    </div>
  );
}
