import React from 'react';
import CaseStudyInputs from './input-component-types/CaseStudyInputs';
import FeedbackInputs from './input-component-types/FeedbackInputs';
import ImprovementInputs from './input-component-types/ImprovementInputs';
import LibraryInputs from './input-component-types/LibraryInputs';

const Inputs = ({
  feedbackType,
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
  bookName,
  setBookName,
  bookLink,
  setBookLink,
  handleSubmit,
}) => {
  switch (feedbackType) {
    case 'feedback':
      return (
        <FeedbackInputs
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
          handleSubmit={handleSubmit}
        />
      );
    case 'improvement':
      return (
        <ImprovementInputs
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
          handleSubmit={handleSubmit}
        />
      );
    case 'case-study':
      return (
        <CaseStudyInputs
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          emailAddress={emailAddress}
          setEmailAddress={setEmailAddress}
          feedbackBody={feedbackBody}
          setFeedbackBody={setFeedbackBody}
          setAttachment={setAttachment}
          handleSubmit={handleSubmit}
        />
      );
    case 'library':
      return (
        <LibraryInputs
          setFirstName={setFirstName}
          setLastName={setLastName}
          setEmailAddress={setEmailAddress}
          setBookName={setBookName}
          setBookLink={setBookLink}
          firstName={firstName}
          lastName={lastName}
          emailAddress={emailAddress}
          bookName={bookName}
          bookLink={bookLink}
          handleSubmit={handleSubmit}
        />
      );
    default:
      return <h1>Component type {feedbackType} does not exist. Type options are 'feedback', 'library', 'case-study' or 'improvement'</h1>;
  }
};

export default Inputs;
