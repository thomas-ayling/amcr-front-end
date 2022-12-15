import React from 'react';
import UserInfoInputs from '../shared-input-components/UserInfoInputs';
import SubmitButton from '../shared-input-components/SubmitButton';

const LibraryInputs = ({ firstName, setFirstName, lastName, setLastName, emailAddress, setEmailAddress, bookName, setBookName, bookLink, setBookLink, handleSubmit, awaitingResponse, submitStatus }) => {
  return (
    <div className='contact-form-container'>
      <form onSubmit={handleSubmit} className='improvements-form contact-form'>
        <UserInfoInputs setFirstName={setFirstName} setLastName={setLastName} setEmailAddress={setEmailAddress} firstName={firstName} lastName={lastName} emailAddress={emailAddress} mandatory={true} />
        <input type='text' name='book-name' className='contact-form-input book-name-input' placeholder='Book name*' onChange={(e) => setBookName(e.target.value)} value={bookName} required />
        <input type='text' name='book-link' className='contact-form-input book-link-input' placeholder='Book link' onChange={(e) => setBookLink(e.target.value)} value={bookLink} />
        <SubmitButton awaiting={awaitingResponse} status={submitStatus} />
      </form>
    </div>
  );
};

export default LibraryInputs;
