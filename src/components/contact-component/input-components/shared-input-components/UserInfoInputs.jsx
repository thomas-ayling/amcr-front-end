import React from 'react';

const UserDataInputs = ({ setFirstName, setLastName, setEmailAddress, firstName, lastName, emailAddress, mandatory }) => {
  const asterisk = mandatory ? '*' : '';
  return (
    <>
      <input type='text' placeholder={`First name${asterisk}`} name='first-name' className='contact-form-input first-name-input' onChange={(e) => setFirstName(e.target.value)} value={firstName} required={mandatory} />
      <input type='text' placeholder={`Last name${asterisk}`} name='last-name' className='contact-form-input last-name-input' onChange={(e) => setLastName(e.target.value)} value={lastName} required={mandatory} />
      <input
        type='email'
        placeholder={`Email address${asterisk}`}
        name='email-address'
        className='contact-form-input email-input'
        onChange={(e) => setEmailAddress(e.target.value)}
        value={emailAddress}
        required={mandatory}
      />
    </>
  );
};

export default UserDataInputs;
