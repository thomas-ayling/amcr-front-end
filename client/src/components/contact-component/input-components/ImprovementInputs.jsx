import React from 'react';
import AttachmentInput from './shared-input-components/AttachmentInput';
import FeedbackBodyTextarea from './shared-input-components/FeedbackBodyTextarea';
import UserInfoInputs from './shared-input-components/UserInfoInputs';
import IsAnonymousCheckbox from './shared-input-components/IsAnonymousCheckbox';

const ImprovementInputs = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  emailAddress,
  setEmailAddress,
  feedbackBody,
  setFeedbackBody,
  setAttachment,
  isAnonymous,
  setIsAnonymous,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit} className='improvements-form contact-form'>
      {!isAnonymous && <UserInfoInputs setFirstName={setFirstName} setLastName={setLastName} setEmailAddress={setEmailAddress} firstName={firstName} lastName={lastName} emailAddress={emailAddress} />}
      <FeedbackBodyTextarea id='improvements-textarea' placeholder='Enter details about your proposed improvements to the engineering center' setFeedbackBody={setFeedbackBody} value={feedbackBody} />
      <AttachmentInput setAttachment={setAttachment} />
      <IsAnonymousCheckbox setIsAnonymous={setIsAnonymous} />
      <input type='submit' value='Propose Improvement' />
    </form>
  );
};

export default ImprovementInputs;
