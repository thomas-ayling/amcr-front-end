import React from 'react';
import axios from 'axios';

// Get from environment
const baseUrl = 'http://localhost:3001/feedback';

const create = (feedback, attachment) => {
  const formData = new FormData();

  const feedbackBlob = new Blob([JSON.stringify(feedback)], {
    type: 'application/json',
  });

  formData.append('feedback', feedbackBlob);

  if (attachment) {
    formData.append('attachment', attachment);
  }

  axios
    .post(baseUrl + '/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then((res) => console.dir(res.data));
};

export { create };
