import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'reactjs-popup/dist/index.css';
import './Diagram.css';
import GridDisplay from './DiagramPages/GridDisplay';
import DiagramDropdown from './DiagramPages/DiagramDropdown';
import DiagramTextarea from './DiagramPages/DiagramTextarea';

import { get, put } from '../../service/DiagramService';

import { runToastNotification } from '../toast-notification/ToastNotification';

const Diagram = () => {
  const [totalNum, setTotalNum] = useState(3);
  const [currentNode, setCurrentNode] = useState(1);
  const [nodeArray, setNodeArray] = useState([]);
  const [changesConfirmed, setChangesConfirmed] = useState(false);

  useEffect(() => {
    get(setNodeArray);
  }, []);

  useEffect(() => {
    if (nodeArray.length < 9) {
      let newNodeArray = [...nodeArray];
      newNodeArray.push({ nodePosition: nodeArray.length + 1, title: ' ', body: ' ' });
      setNodeArray(newNodeArray);
    }
    console.log('nodeArray', nodeArray);
  }, [nodeArray]);

  const updateContent = () => {
    put(nodeArray, setChangesConfirmed);
  };

  useEffect(() => {
    if (changesConfirmed) {
      runToastNotification('Diagram changes confirmed!', 'success');
      setChangesConfirmed(false);
    }
  }, [changesConfirmed]);
  if (nodeArray.length == 9) {
    return (
      <div>
        <div className='diagram-dropdown-container'>
          <DiagramDropdown id={'nodeTotalNumber'} totalNum={totalNum} setTotalNum={setTotalNum} />
          <DiagramDropdown id={'currentNode'} currentNode={currentNode} setCurrentNode={setCurrentNode} totalNum={totalNum} />
        </div>

        <div className='diagram-popup-inputs'>
          <DiagramTextarea type={'title'} nodeArray={nodeArray} setNodeArray={setNodeArray} currentNode={currentNode} />
          <DiagramTextarea type={'body'} nodeArray={nodeArray} setNodeArray={setNodeArray} currentNode={currentNode} />
        </div>
        <GridDisplay totalNum={totalNum} currentNode={currentNode} nodeArray={nodeArray} />
        <div className='diagram-submit-button-container'>
          <button className='diagram-submit-button' onClick={updateContent}>
            Confirm Changes
          </button>
        </div>
      </div>
    );
  }
};

export default Diagram;
