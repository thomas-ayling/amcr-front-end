import React from 'react';

const UserDataInputs = ({ setFirstName, setLastName, setEmailAddress, firstName, lastName, emailAddress }) => {
  return (
    <div className='user-info-inputs'>
      <input type='text' placeholder='First name' name='first-name' className='contact-form-input' onChange={(e) => setFirstName(e.target.value)} value={firstName} />
      <input type='text' placeholder='Last name' name='last-name' className='contact-form-input' onChange={(e) => setLastName(e.target.value)} value={lastName} />
      <input type='email' placeholder='Email address' name='email-address' className='contact-form-input' onChange={(e) => setEmailAddress(e.target.value)} value={emailAddress} />
    </div>
  );
};

export default UserDataInputs;
