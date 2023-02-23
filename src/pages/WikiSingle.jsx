import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Diagram from '../components/diagram-component/Diagram';
import '../components/wiki/WikiSingle.css';

const WikiSingle = () => {
  const [adminEnabled, setAdminEnabled] = useState(false);
  return (
    <div className='wiki-single-container'>
      <button className='wiki-single-admin-toggle' onClick={() => setAdminEnabled(!adminEnabled)}>
        {adminEnabled ? 'Stop editing page' : 'Edit page'}
      </button>
      <div className='wiki-single-diagram-container'>
        <Diagram adminEnabled={adminEnabled} />
      </div>
      <Link to='/wiki'>
        <button className='wiki-single-button'>Go back</button>
      </Link>
      <div className='wiki-single-filler'></div>
    </div>
  );
};

export default WikiSingle;
