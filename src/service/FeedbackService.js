import axios from 'axios';
const baseUrl = 'http://ec-acad-elb-a07a79316f54cbbf.elb.eu-west-2.amazonaws.com:3001/feedback';
// const baseUrl = 'http://localhost:3001/feedback';

const headers = { headers: { 'Content-Type': 'multipart/form-data', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': '*', 'Access-Control-Allow-Credentials': 'true' } };

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
    .post(`${baseUrl}/`, formData, headers)
    .then((response) => {
      setSubmitStatus('success');
      setAwaitingResponse(false);
    })
    .catch((err) => {
      setSubmitStatus('error');
      setAwaitingResponse(false);
    });
};

const get = (last, setSubmitStatus, setResponse) => {
  const url = `${baseUrl}?older=true&last=${last + 1}`;
  axios
    .get(url, headers)
    .then((res) => {
      setSubmitStatus('success');
      setResponse(res.data);
      console.log('res.data', res.data);
    })
    .catch((err) => {
      setSubmitStatus('error');
      setResponse(err);
    });
};

const getCount = (setCount, setLast) => {
  axios
    .get(`${baseUrl}/count`, headers)
    .then((res) => {
      setCount(res.data);
      setLast(res.data);
    })
    .catch(setCount(0));
};

export { create, get, getCount };
