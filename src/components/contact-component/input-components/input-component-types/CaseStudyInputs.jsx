import React, { useState } from 'react';
import AttachmentInput from '../shared-input-components/AttachmentInput';
import FeedbackBodyTextarea from '../shared-input-components/FeedbackBodyTextarea';
import UserInfoInputs from '../shared-input-components/UserInfoInputs';
import SubmitButton from '../shared-input-components/SubmitButton';

const CaseStudyInputs = ({ firstName, setFirstName, lastName, setLastName, emailAddress, setEmailAddress, feedbackBody, setFeedbackBody, attachment, setAttachment, handleSubmit, awaitingResponse, submitStatus }) => {
  return ( 
    <div className='contact-form-container'>
      <form onSubmit={handleSubmit} className='casestudy-form contact-form'>
        <UserInfoInputs setFirstName={setFirstName} setLastName={setLastName} setEmailAddress={setEmailAddress} firstName={firstName} lastName={lastName} emailAddress={emailAddress} mandatory={true} />
        <FeedbackBodyTextarea id='casestudy-textarea' placeholder='Leave an overview of your proposed case study*' setFeedbackBody={setFeedbackBody} value={feedbackBody} />
        <AttachmentInput attachment={attachment} setAttachment={setAttachment} />
        <SubmitButton awaiting={awaitingResponse} status={submitStatus} />
      </form>
    </div>
  );
};

export default CaseStudyInputs;
