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
  const [nodeData, setNodeData] = useState({
    1: {
      title: ' ',
      body: ' ',
    },
    2: {
      title: ' ',
      body: ' ',
    },
    3: {
      title: ' ',
      body: ' ',
    },
    4: {
      title: ' ',
      body: ' ',
    },
    5: {
      title: ' ',
      body: ' ',
    },
    6: {
      title: ' ',
      body: ' ',
    },
    7: {
      title: ' ',
      body: ' ',
    },
    8: {
      title: ' ',
      body: ' ',
    },
    9: {
      title: ' ',
      body: ' ',
    },
  });
  const [changesConfirmed, setChangesConfirmed] = useState(false);
  useEffect(() => {
    get(setNodeData);
  }, []);

  const updateContent = () => {
    for (let i = 1; i <= 9; i++) {
      const output = {
        nodePosition: i,
        title: nodeData[i].title,
        body: nodeData[i].body,
      };
      put(i, output, setChangesConfirmed);
    }
  };
  useEffect(() => {
    if (changesConfirmed) {
      runToastNotification('Diagram changes confirmed!', 'success');
      setChangesConfirmed(false);
    }
  }, [changesConfirmed]);
  return (
    <div>
      <div className='diagram-dropdown-container'>
        <DiagramDropdown id={'nodeTotalNumber'} totalNum={totalNum} setTotalNum={setTotalNum} />
        <DiagramDropdown id={'currentNode'} currentNode={currentNode} setCurrentNode={setCurrentNode} totalNum={totalNum} />
      </div>

      <div className='diagram-popup-inputs'>
        <DiagramTextarea type={'title'} nodeData={nodeData} setNodeData={setNodeData} currentNode={currentNode} />
        <DiagramTextarea type={'body'} nodeData={nodeData} setNodeData={setNodeData} currentNode={currentNode} />
      </div>
      <GridDisplay totalNum={totalNum} currentNode={currentNode} nodeData={nodeData} />
      <div className='diagram-submit-button-container'>
        <button className='diagram-submit-button' onClick={updateContent}>
          Confirm Changes
        </button>
      </div>
    </div>
  );
};

export default Diagram;
