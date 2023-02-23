import React from 'react';
import FeedbackBodyTextarea from '../shared-input-components/FeedbackBodyTextarea';
import UserInfoInputs from '../shared-input-components/UserInfoInputs';
import SubmitButton from '../shared-input-components/SubmitButton';

const FeedbackInputs = ({ firstName, setFirstName, lastName, setLastName, emailAddress, setEmailAddress, feedbackBody, setFeedbackBody, handleSubmit, awaitingResponse, submitStatus }) => {
  return (
    <div className='contact-form-container'>
      <form onSubmit={handleSubmit} className='feedback-form contact-form'>
        <UserInfoInputs
          setFirstName={setFirstName}
          setLastName={setLastName}
          setEmailAddress={setEmailAddress}
          firstName={firstName}
          lastName={lastName}
          emailAddress={emailAddress}
          mandatory={false}
        />
        <FeedbackBodyTextarea id='feedback-textarea' placeholder={`Leave us some feedback* (2000 character max)`} setFeedbackBody={setFeedbackBody} value={feedbackBody} />
        <SubmitButton awaiting={awaitingResponse} status={submitStatus} />
      </form>
    </div>
  );
};

export default FeedbackInputs;
