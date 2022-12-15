import axios from 'axios';
const baseUrl = 'ec-acad-be-elb-a7e408ca999f09dd.elb.eu-west-2.amazonaws.com:3001/feedback';

const create = (feedback, attachment, setAwaitingResponse, setSubmitStatus) => {
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
    .then((res) => {
      if (res.status === 200) {
        setSubmitStatus('success');
        setAwaitingResponse(false);
      }
    })
    .catch((err) => {
      err.status === 500
        ? alert('There was an internal server error while submitting your feedback. Please try again or contact an administrator if this continues to happen.')
        : alert('An unknown error has occurred. Please try again or contact an administrator if this continues to happen.');
      setSubmitStatus('error');
      setAwaitingResponse(false);
    });
};

export { create };
