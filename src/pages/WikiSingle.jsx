import React, { useState } from 'react';
import Diagram from '../components/diagram-component/Diagram';
import '../components/wiki/WikiSingle.css';

const WikiSingle = () => {
  const [adminEnabled, setAdminEnabled] = useState(false);
  return (
    <div className='wiki-single-container'>
      <button className='wiki-single-admin-toggle' onClick={() => setAdminEnabled(!adminEnabled)}>
        {adminEnabled ? 'Stop editing page' : 'Edit page'}
      </button>
      <Diagram adminEnabled={adminEnabled} />
      <button className='wiki-single-button'>Go back</button>
    </div>
  );
};

export default WikiSingle;
