import './styles/ContactComponent.css';
import React, { useState, useEffect } from 'react';
import { create } from '../../service/FeedbackService';
import DescriptionBox from './description-component/DescriptionBox';
import Inputs from './input-components/Inputs';
import { runToastNotification } from '../toast-notification/ToastNotification';

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

  useEffect(() => {
    if (submitStatus.includes('error')) runToastNotification('There was an internal server error while submitting your feedback. Please try again or contact an administrator if this continues to happen.', 'error');
    if (submitStatus.includes('success')) runToastNotification('Your feedback has been sent', 'success');
    return () => {
      setSubmitStatus('idle');
    }
  }, [submitStatus]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (feedbackBody.length > 2000) {
      runToastNotification("Your feedback exceeds the character limit of 2000", "error");
      return;
    }

    const feedback = {
      feedbackType: feedbackType,
      firstName: firstName,
      lastName: lastName,
      emailAddress: emailAddress,
      feedbackBody: feedbackBody,
      bookName: bookName,
      bookLink: bookLink,
    };

    setAwaitingResponse(true);

    create(feedback, attachment, setAwaitingResponse, setSubmitStatus);
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
          attachment={attachment}
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
