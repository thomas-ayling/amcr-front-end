import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'reactjs-popup/dist/index.css';
import './Diagram.css';
import GridDisplay from './DiagramPages/GridDisplay';
import DiagramDropdown from './DiagramPages/DiagramDropdown';
import DiagramTextarea from './DiagramPages/DiagramTextarea';

import { runToastNotification } from '../toast-notification/ToastNotification';

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
      .get(`${baseUrl}/page-content/diagram/`)
      .then((res) => {
        res?.data?.map((elem) => {
          setNodeTitle((prevTitle) => ({ ...prevTitle, [elem.nodePosition]: elem.title }));
          setNodeBody((prevBody) => ({ ...prevBody, [elem.nodePosition]: elem.body }));
        });
      })
      .catch((error) => {
        console.log(error);
        runToastNotification('Could not load diagram data', 'error');
      });
  }, []);

  const updateContent = () => {
    for (let i = 1; i <= 9; i++) {
      const output = {
        nodePosition: i,
        title: nodeTitle[i],
        body: nodeBody[i],
      };
      axios
        .put(`${baseUrl}/page-content/diagram/node/${i}`, output)
        .then(() => {
          setChangesConfirmed(true);
        })
        .catch((error) => {
          console.log(error);
          runToastNotification('Could not update diagram data', 'error');
        });
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
        <DiagramTextarea type={'title'} nodeTitle={nodeTitle} setNodeTitle={setNodeTitle} currentNode={currentNode} />
        <DiagramTextarea type={'body'} nodeBody={nodeBody} setNodeBody={setNodeBody} currentNode={currentNode} />
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
