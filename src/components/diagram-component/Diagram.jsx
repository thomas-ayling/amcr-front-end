import React, { useState, useEffect } from 'react';
import 'reactjs-popup/dist/index.css';
import './Diagram.css';
import GridDisplay from './DiagramPages/GridDisplay';
import DiagramAdminChanges from './DiagramPages/DiagramAdminChanges';
import DiagramConfirmButton from './DiagramPages/DiagramConfirmButton';

import { get, put } from '../../service/DiagramService';
import { runToastNotification } from '../toast-notification/ToastNotification';

const Diagram = ({ adminEnabled }) => {
  const [totalNum, setTotalNum] = useState(3);
  const [currentNode, setCurrentNode] = useState(1);
  const [nodeArray, setNodeArray] = useState([]);
  const [changesConfirmed, setChangesConfirmed] = useState(false);
  const [requestStatus, setRequestStatus] = useState();

  useEffect(() => {
    get(setNodeArray, setRequestStatus);
  }, []);

  useEffect(() => {
    if (nodeArray.length < 9) {
      let newNodeArray = [...nodeArray];
      newNodeArray.push({ nodePosition: nodeArray.length + 1, title: ' ', body: ' ' });
      setNodeArray(newNodeArray);
    }
  }, [nodeArray]);

  const updateContent = () => {
    put(nodeArray, setChangesConfirmed, setRequestStatus);
  };

  useEffect(() => {
    if (changesConfirmed) {
      runToastNotification('Diagram changes confirmed!', 'success');
      setChangesConfirmed(false);
    }
  }, [changesConfirmed]);

  useEffect(() => {
    if (requestStatus === 'error-404') runToastNotification(`Diagram data not found!`, 'error');
    else if (requestStatus === 'other-get-error') runToastNotification('Could not load diagram data!', 'error');
    else if (requestStatus === 'other-put-error') runToastNotification('Could not update diagram data!', 'error');
  }, [requestStatus]);

  if (nodeArray.length == 9) {
    return (
      <div>
        {adminEnabled && (
          <DiagramAdminChanges
            totalNum={totalNum}
            setTotalNum={setTotalNum}
            currentNode={currentNode}
            setCurrentNode={setCurrentNode}
            nodeArray={nodeArray}
            setNodeArray={setNodeArray}
          />
        )}
        <GridDisplay totalNum={totalNum} currentNode={currentNode} nodeArray={nodeArray} />
        {adminEnabled && <DiagramConfirmButton updateContent={updateContent} />}
      </div>
    );
  }
};

export default Diagram;
