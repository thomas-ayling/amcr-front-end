import './styles/ContactComponent.css';
import React, { useState } from 'react';
import { create } from '../../service/FeedbackService';
import DescriptionBox from './description-component/DescriptionBox';
import Inputs from './input-components/Inputs';

const ContactComponent = ({ feedbackType }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [feedbackBody, setFeedbackBody] = useState('');
  const [bookName, setBookName] = useState('');
  const [bookLink, setBookLink] = useState('');
  const [attachment, setAttachment] = useState();
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [awaitingResponse, setAwaitingResponse] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();

    let feedback = {};

    feedback['feedbackType'] = feedbackType;
    feedback['firstName'] = firstName;
    feedback['lastName'] = lastName;
    feedback['emailAddress'] = emailAddress;
    feedback['feedbackBody'] = feedbackBody;
    feedback['bookName'] = bookName;
    feedback['bookLink'] = bookLink;

    setAwaitingResponse(true);

    create(feedback, attachment, setAwaitingResponse, setSubmitStatus);

    if (submitStatus === 'error') alert('There was an internal server error while submitting your feedback. Please try again or contact an administrator if this continues to happen.');
  };

  return (
    <div className='contact-component-container'>
      <div className='contact-component'>
        <DescriptionBox feedbackType={feedbackType} />
        <Inputs
          feedbackType={feedbackType}
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          emailAddress={emailAddress}
          setEmailAddress={setEmailAddress}
          feedbackBody={feedbackBody}
          setFeedbackBody={setFeedbackBody}
          setAttachment={setAttachment}
          isAnonymous={isAnonymous}
          setIsAnonymous={setIsAnonymous}
          bookName={bookName}
          setBookName={setBookName}
          bookLink={bookLink}
          setBookLink={setBookLink}
          handleSubmit={handleSubmit}
          awaitingResponse={awaitingResponse}
          submitStatus={submitStatus}
        />
      </div>
    </div>
  );
};

export default ContactComponent;
