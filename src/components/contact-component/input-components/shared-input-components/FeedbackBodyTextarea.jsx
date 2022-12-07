import React from 'react';

const FeedbackBodyTextarea = ({ id, placeholder, setFeedbackBody, feedbackBody }) => {
  return <textarea id={id} placeholder={placeholder} className='feedback-body-textarea feedback-input' onChange={(e) => setFeedbackBody(e.target.value)} value={feedbackBody}></textarea>;
};

export default FeedbackBodyTextarea;
