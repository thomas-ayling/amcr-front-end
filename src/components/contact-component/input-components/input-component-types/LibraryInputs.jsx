import React from 'react';
import UserInfoInputs from '../shared-input-components/UserInfoInputs';
import SubmitButton from '../shared-input-components/SubmitButton';

const LibraryInputs = ({ firstName, setFirstName, lastName, setLastName, emailAddress, setEmailAddress, bookName, setBookName, bookLink, setBookLink, handleSubmit }) => {
  return (
    <div className='contact-form-container'>
      <form onSubmit={handleSubmit} className='improvements-form contact-form'>
        <UserInfoInputs setFirstName={setFirstName} setLastName={setLastName} setEmailAddress={setEmailAddress} firstName={firstName} lastName={lastName} emailAddress={emailAddress} />
        <input type='text' name='book-name' className='contact-form-input book-name-input' placeholder='Book name...' onChange={(e) => setBookName(e.target.value)} value={bookName} />
        <input type='text' name='book-link' className='contact-form-input book-link-input' placeholder='Book link... (optional)' onChange={(e) => setBookLink(e.target.value)} value={bookLink} />
        <SubmitButton />
      </form>
    </div>
  );
};

export default LibraryInputs;
