import React from 'react';

const FeedbackBodyTextarea = ({ id, placeholder, setFeedbackBody, feedbackBody }) => {
  return <textarea id={id} placeholder={placeholder} className='contact-form-input body-input' onChange={(e) => setFeedbackBody(e.target.value)} value={feedbackBody} required></textarea>;
};
export default FeedbackBodyTextarea;
