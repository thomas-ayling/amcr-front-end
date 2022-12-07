import React from 'react';
import AttachmentInput from './shared-input-components/AttachmentInput';
import FeedbackBodyTextarea from './shared-input-components/FeedbackBodyTextarea';
import UserInfoInputs from './shared-input-components/UserInfoInputs';

const CaseStudyInputs = ({
  firstName,
  setFirstName,
  lastName,
  setLastName,
  emailAddress,
  setEmailAddress,
  feedbackBody,
  setFeedbackBody,
  setAttachment,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit} className='casestudy-form contact-form'>
      <UserInfoInputs setFirstName={setFirstName} setLastName={setLastName} setEmailAddress={setEmailAddress} firstName={firstName} lastName={lastName} emailAddress={emailAddress} />
      <FeedbackBodyTextarea id='casestudy-textarea' placeholder='Enter details about your proposed case study' setFeedbackBody={setFeedbackBody} value={feedbackBody} />
      <AttachmentInput setAttachment={setAttachment} />
      <input type='submit' value='Propose Study' />
    </form>
  );
};

export default CaseStudyInputs;
