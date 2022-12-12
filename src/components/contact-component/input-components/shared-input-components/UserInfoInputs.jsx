import React from 'react';

const UserDataInputs = ({ setFirstName, setLastName, setEmailAddress, firstName, lastName, emailAddress, mandatory }) => {
  const asterisk = mandatory ? '*' : '';

  const setFirstNameWithChecks = (value) => {
    setFirstName(/[^a-zA-Z]/.test(value) ? value.replace(/[^a-zA-Z]/, '') : value);
  };

  const setLastNameWithChecks = (value) => {
    setLastName(/[^a-zA-Z]/.test(value) ? value.replace(/[^a-zA-Z]/, '') : value);
  };

  return (
    <>
      <input type='text' placeholder={`First name${asterisk}`} name='first-name' className='contact-form-input first-name-input' onChange={(e) => setFirstNameWithChecks(e.target.value)} value={firstName} required={mandatory} />
      <input type='text' placeholder={`Last name${asterisk}`} name='last-name' className='contact-form-input last-name-input' onChange={(e) => setLastNameWithChecks(e.target.value)} value={lastName} required={mandatory} />
      <input type='email' placeholder={`Email address${asterisk}`} name='email-address' className='contact-form-input email-input' onChange={(e) => setEmailAddress(e.target.value)} value={emailAddress} required={mandatory} />
    </>
  );
};

export default UserDataInputs;
