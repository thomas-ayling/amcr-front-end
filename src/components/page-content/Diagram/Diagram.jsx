import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'reactjs-popup/dist/index.css';
import './Diagram.css';
import Grid from './DiagramPages/Grid';
import TitleGrid from './DiagramPages/TitleGrid';

const baseUrl = 'http://localhost:3001';

export default function Diagram() {
  const [totalNum, setTotalNum] = useState(3);
  const [currentNode, setCurrentNode] = useState(1);
  const [nodeTitle, setNodeTitle] = useState({
    1: " ",
    2: " ",
    3: " ",
    4: " ",
    5: " ",
    6: " ",
    7: " ",
    8: " ",
    9: " "
  });
  const [nodeBody, setNodeBody] = useState({
    1: " ",
    2: " ",
    3: " ",
    4: " ",
    5: " ",
    6: " ",
    7: " ",
    8: " ",
    9: " "
  });

  useEffect(() => {
    axios.get(`${baseUrl}/page-content/diagram/get-all`)
    .then((res) => {
      res.data.map((elem) => {
        console.log(`elem node id, elem title, elem body: ${elem.nodeId} ${elem.title} ${elem.body}`);
        setNodeTitle((prevTitle) => ({...prevTitle, [elem.nodeId]: elem.title}))
        setNodeBody((prevBody) => ({...prevBody, [elem.nodeId]: elem.body}))
    });
    })
    .catch((error) => {
      console.log(error);
    })
  }, [])

  const output = {
    id: "",
    nodeId: "",
    title: "",
    body: ""
  };

  function updateContent() {
    for(let i = 1; i <= 9; i++) {
      const output = {
        nodeId: i,
        title: nodeTitle[i],
        body: nodeBody[i]
      };
      axios.put(`${baseUrl}/page-content/diagram/update/${i}`, output)
      .then((res) => {
        console.log(`id, title, body: ${output.nodeId} ${output.title} ${output.body}`);
      })
      .catch((error) => {
        console.log(error);
      })
    }
  }

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
          <textarea className='builder--textarea builder--textarea-title' value={nodeTitle[currentNode]} placeholder='Title' onChange={(e) => setNodeTitle((prevTitle) => ({...prevTitle, [currentNode]: e.target.value}))} />
        </div>
        <div className='body--input'>
          <textarea className='builder--textarea builder--textarea-body' value={nodeBody[currentNode]} placeholder='Content' onChange={(e) => setNodeBody((prevBody) => ({...prevBody, [currentNode]: e.target.value}))} />
        </div>
      </div>
      <Grid totalNum={totalNum} currentNode={currentNode} title={nodeTitle} body={nodeBody}/>
      <TitleGrid totalNum={totalNum} currentNode={currentNode} title={nodeTitle} body={nodeBody}/>
      <div className='submit--button-container'>
        <button className='submit--button' onClick={updateContent}>Confirm Changes</button>
      </div>
    </div>
  );
}
