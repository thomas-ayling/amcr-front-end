import React from 'react';
import { useState, useEffect } from 'react';

const UserDataInputs = ({ setFirstName, setLastName, setEmailAddress, firstName, lastName, emailAddress, mandatory }) => {
  const [required, setRequired] = useState(mandatory);
  const [asterisk, setAsterisk] = useState(required ? '*' : '');

  useEffect(() => {
    setAsterisk(required ? '*' : '');
  }, [required])

  const setFirstNameWithChecks = (value) => {
    setFirstName(/[^a-zA-Z]/.test(value) ? value.replace(/[^a-zA-Z]/, '') : value);
    setRequired(value.length > 0 || lastName.length > 0 || emailAddress.length > 0 || mandatory);
  };

  const setLastNameWithChecks = (value) => {
    setLastName(/[^a-zA-Z]/.test(value) ? value.replace(/[^a-zA-Z]/, '') : value);
    setRequired(firstName.length > 0 || value.length > 0 || emailAddress.length > 0 || mandatory);
  };

  const setEmailAddressWithChecks = (value) => {
    setEmailAddress(value);
    setRequired(firstName.length > 0 || lastName.length > 0 || value.length > 0 || mandatory);
  };

  return (
    <>
      <input type='text' placeholder={`First name${asterisk}`} name='first-name' className='contact-form-input first-name-input' onChange={(e) => setFirstNameWithChecks(e.target.value)} value={firstName} required={required} />
      <input type='text' placeholder={`Last name${asterisk}`} name='last-name' className='contact-form-input last-name-input' onChange={(e) => setLastNameWithChecks(e.target.value)} value={lastName} required={required} />
      <input type='email' placeholder={`Email address${asterisk}`} name='email-address' className='contact-form-input email-input' onChange={(e) => setEmailAddressWithChecks(e.target.value)} value={emailAddress} required={required} />
    </>
  );
};

export default UserDataInputs;
