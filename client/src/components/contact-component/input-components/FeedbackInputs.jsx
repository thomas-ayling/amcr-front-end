import React from 'react';
import AttachmentInput from './shared-input-components/AttachmentInput';
import FeedbackBodyTextarea from './shared-input-components/FeedbackBodyTextarea';
import UserInfoInputs from './shared-input-components/UserInfoInputs';
import IsAnonymousCheckbox from './shared-input-components/IsAnonymousCheckbox';

const FeedbackInputs = ({ firstName, setFirstName, lastName, setLastName, emailAddress, setEmailAddress, feedbackBody, setFeedbackBody, setAttachment, isAnonymous, setIsAnonymous, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className='feedback-form contact-form'>
      {!isAnonymous && <UserInfoInputs setFirstName={setFirstName} setLastName={setLastName} setEmailAddress={setEmailAddress} firstName={firstName} lastName={lastName} emailAddress={emailAddress} />}
      <FeedbackBodyTextarea id='feedback-textarea' placeholder='Enter some feedback for us' setFeedbackBody={setFeedbackBody} value={feedbackBody} />
      <AttachmentInput setAttachment={setAttachment} />
      <IsAnonymousCheckbox setIsAnonymous={setIsAnonymous} />
      <input type='submit' value='Send Feedback' />
    </form>
  );
};

export default FeedbackInputs;
