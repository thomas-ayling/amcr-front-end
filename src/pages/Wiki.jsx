import { React, useState } from 'react';
import ContactComponent from '../components/contact-component/ContactComponent';
import Diagram from '../components/diagram-component/Diagram';

const Wiki = () => {
  const [adminEnabled, setAdminEnabled] = useState(false);
  return (
    <>
      <input type='checkbox' onChange={(e) => setAdminEnabled(e.target.checked)}></input>
      <Diagram adminEnabled={adminEnabled} />
      <ContactComponent feedbackType={'improvement'} />
    </>
  );
};

export default Wiki;
