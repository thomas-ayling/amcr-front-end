import React, { useEffect, useState } from 'react';
import {create} from '../service/FeedbackService';

const ContactComponent = ({ type }) => {
  // Initialize state hooks
  const [descriptionTitle, setDescriptionTitle] = useState(<></>);
  const [descriptionText, setDescriptionText] = useState(<></>);
  const [feedbackInputs, setFeedbackInputs] = useState(<></>);
  const [attatchmentsInput, setAttatchmentsInput] = useState(<></>);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [feedbackBody, setFeedbackBody] = useState('');
  const [bookName, setBookName] = useState('');
  const [bookLink, setBookLink] = useState('');
  const [attachment, setAttachment] = useState(undefined);

  const textareaPlaceholder =
    type === 'feedback'
      ? 'Enter your feedback...'
      : type === 'case-study'
      ? 'Enter details about your proposed case study...'
      : type === 'improvement'
      ? 'Enter details about your proposed improvements...'
      : '';

  useEffect(() => {
    // Set title of description block based on form type
    setDescriptionTitle(
      type === 'feedback' ? (
        <h1>Leave us some feedback</h1>
      ) : type === 'case-study' ? (
        <h1>Propose a new case study</h1>
      ) : type === 'improvement' ? (
        <h1>Propose an improvement to the engineering center</h1>
      ) : (
        type === 'library' && <h1>Request a new book for the library</h1>
      )
    );

    // Set text of description block based on form type
    setDescriptionText(
      <p>Text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text</p>
    );

    // Change the feedback inputs boxes based on form type
    setFeedbackInputs(
      type === 'library' ? (
        <div>
          <input type='text' name='book-name' placeholder="Enter the book's name..." onChange={(e) => setBookName(e.target.value)} value={bookName} />
          <input type='text' name='book-link' placeholder='Enter a link to the book... (optional)' onChange={(e) => setBookLink(e.target.value)} value={bookLink} />
        </div>
      ) : (
        <textarea placeholder={textareaPlaceholder} name='feedback-body' className='contact-form-textarea' onChange={(e) => setFeedbackBody(e.target.value)} value={feedbackBody} />
      )
    );

    setAttatchmentsInput((type === 'case-study' || type === 'improvement') && <input type='file' id='file-input' onChange={(e) => setAttachment(e.target.files[0])} value={attachment} />);
  }, [type, textareaPlaceholder]);

  const submitForm = (e) => {
    e.preventDefault();

    let feedback = {};

    feedback['feedback-type'] = type;
    feedback['firstName'] = firstName;
    feedback['lastName'] = lastName;
    feedback['emailAddress'] = emailAddress;
    feedback['feedbackBody'] = feedbackBody;
    feedback['bookName'] = bookName;
    feedback['bookLink'] = bookLink;


    console.dir(feedback)
  
    create(feedback, attachment);
    

    // for (let [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }

    // SEND JSON NEXT TO FORMDATA:
    // https://stackoverflow.com/questions/44983206/reactjs-unable-to-send-json-data-and-pdf-file-in-one-post-call

  };

  return (
    <div className='contact-component'>
      <div className='contact-component-description'>
        {descriptionTitle}
        {descriptionText}
      </div>
      <div className='contact-component-form'>
        <form onSubmit={submitForm} id='feedback-form'>
          <div className='user-details-input '>
            <input type='text' placeholder='First name...' name='first-name' className='contact-form-input' onChange={(e) => setFirstName(e.target.value)} value={firstName} />
            <input type='text' placeholder='Last name...' name='last-name' className='contact-form-input' onChange={(e) => setLastName(e.target.value)} value={lastName} />
            <input type='email' placeholder='Email address...' name='email-address' className='contact-form-input' onChange={(e) => setEmailAddress(e.target.value)} value={emailAddress} />
          </div>
          {feedbackInputs}
          {attatchmentsInput}
          <input type='submit' />
        </form>
      </div>
    </div>
  );
};

export default ContactComponent;
