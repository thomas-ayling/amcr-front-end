import axios from 'axios';
const baseUrl = 'http://ec-acad-elb-a07a79316f54cbbf.elb.eu-west-2.amazonaws.com:3001/feedback';
// const baseUrl = 'http://13.41.186.121:3001/feedback';

const create = (feedback, attachment, setAwaitingResponse, setSubmitStatus) => {
  const formData = new FormData();

  const feedbackBlob = new Blob([JSON.stringify(feedback)], {
    type: 'application/json',
  });

  formData.append('feedback', feedbackBlob);

  if (attachment) {
    formData.append('attachment', attachment);
  }

  const headers = { 'Content-Type': 'multipart/form-data', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': '*', 'Access-Control-Allow-Credentials': 'true' };

  axios
    .post(baseUrl + '/', formData, {
      headers: headers,
    })
    .then((res) => {
      if (res.status === 200) {
        setSubmitStatus('success');
        setAwaitingResponse(false);
      }
    })
    .catch((err) => {
      setSubmitStatus('error');
      setAwaitingResponse(false);
    });
};

export { create };
