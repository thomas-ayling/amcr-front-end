import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'reactjs-popup/dist/index.css';
import './Diagram.css';
import GridDisplay from './DiagramPages/GridDisplay';

const baseUrl = 'http://localhost:3001';

const Diagram = () => {
  const [totalNum, setTotalNum] = useState(3);
  const [currentNode, setCurrentNode] = useState(1);
  const [nodeTitle, setNodeTitle] = useState({
    1: ' ',
    2: ' ',
    3: ' ',
    4: ' ',
    5: ' ',
    6: ' ',
    7: ' ',
    8: ' ',
    9: ' ',
  });
  const [nodeBody, setNodeBody] = useState({
    1: ' ',
    2: ' ',
    3: ' ',
    4: ' ',
    5: ' ',
    6: ' ',
    7: ' ',
    8: ' ',
    9: ' ',
  });
  const [changesConfirmed, setChangesConfirmed] = useState(false);

  useEffect(() => {
    axios
      .get(`${baseUrl}/page-content/diagram/get-all`)
      .then((res) => {
        res.data.map((elem) => {
          setNodeTitle((prevTitle) => ({ ...prevTitle, [elem.nodeId]: elem.title }));
          setNodeBody((prevBody) => ({ ...prevBody, [elem.nodeId]: elem.body }));
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const updateContent = () => {
    for (let i = 1; i <= 9; i++) {
      const output = {
        nodeId: i,
        title: nodeTitle[i],
        body: nodeBody[i],
      };
      axios
        .put(`${baseUrl}/page-content/diagram/update-by-node/${i}`, output)
        .then(() => {setChangesConfirmed(true);})
        .catch((error) => {
          console.log(error);
        });
    }
  };
  useEffect(() => {
    if (changesConfirmed) {
      alert("Changes confirmed!");
      setChangesConfirmed(false);
    }
  }, [changesConfirmed]);

  return (
    <div>
      <div className='diagram-dropdown-container'>
        <div>
          <label className='diagram-dropdown-label' htmlFor='nodeTotalNumber'>
            Total number of nodes:
          </label>
          <select id='nodeTotalNumber' className='diagram-dropdown-select' name='nodeTotalNumber' value={totalNum} onChange={(e) => setTotalNum(e.target.value)}>
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
          <label className='diagram-dropdown-label' htmlFor='currentNode'>
            Currently editing node:
          </label>
          <select id='currentNode' className='diagram-dropdown-select' name='currentNode' value={currentNode} onChange={(e) => setCurrentNode(e.target.value)}>
            {Array(Number(totalNum))
              .fill()
              .map((_, i) => (
                <option value={i + 1} key={i}>
                  {i + 1}
                </option>
              ))}
          </select>
        </div>
      </div>

      <div className='diagram-popup-inputs'>
        <div className='diagram-title-input'>
          <textarea
            className='diagram-builder-textarea-title'
            value={nodeTitle[currentNode]}
            placeholder='Title'
            onChange={(e) => setNodeTitle((prevTitle) => ({ ...prevTitle, [currentNode]: e.target.value }))}
          />
        </div>
        <div className='diagram-body-input'>
          <textarea
            className='diagram-builder-textarea-body'
            value={nodeBody[currentNode]}
            placeholder='Content'
            onChange={(e) => setNodeBody((prevBody) => ({ ...prevBody, [currentNode]: e.target.value }))}
          />
        </div>
      </div>
      <GridDisplay totalNum={totalNum} currentNode={currentNode} title={nodeTitle} body={nodeBody} />
      <div className='diagram-submit-button-container'>
        <button className='diagram-submit-button' onClick={updateContent}>
          Confirm Changes
        </button>
      </div>
    </div>
  );
};

export default Diagram;