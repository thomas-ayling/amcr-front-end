import React from 'react';
import UserInfoInputs from './shared-input-components/UserInfoInputs';

const LibraryInputs = ({ firstName, setFirstName, lastName, setLastName, emailAddress, setEmailAddress, bookName, setBookName, bookLink, setBookLink, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className='improvements-form contact-form'>
      <UserInfoInputs setFirstName={setFirstName} setLastName={setLastName} setEmailAddress={setEmailAddress} firstName={firstName} lastName={lastName} emailAddress={emailAddress} />
      <input type='text' name='book-name' placeholder="Enter the book's name" onChange={(e) => setBookName(e.target.value)} value={bookName} />
      <input type='text' name='book-link' placeholder='Enter a link to the book (optional)' onChange={(e) => setBookLink(e.target.value)} value={bookLink} />
      <input type='submit' value='Request Book' />
    </form>
  );
};

export default LibraryInputs;
