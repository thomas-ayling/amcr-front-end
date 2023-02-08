import axios from 'axios';

const baseUrl = 'http://ec-acad-elb-a07a79316f54cbbf.elb.eu-west-2.amazonaws.com:3001';
const headers = { headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': '*', 'Access-Control-Allow-Credentials': 'true' } };

const get = (setBooks, setResponseStatus) => {
  axios
    .get(`${baseUrl}/books/`, headers)
    .then((result) => {
      setResponseStatus('Success');
      setBooks(result.data);
    })
    .catch((err) => {
      setResponseStatus('get-error');
      console.error(err);
    });
};

const post = (newBook, setResponseStatus) => {
  axios
    .post(`${baseUrl}/books/`, newBook, headers)
    .then(() => {
      setResponseStatus('post-success');
    })
    .catch((err) => {
      setResponseStatus('post-error');
      console.log(err);
    });
};

const put = (bookId, reserveBook, setResponseStatus) => {
  axios
    .put(`${baseUrl}/books/${bookId}`, reserveBook, headers)
    .then(() => {
      setResponseStatus('put-success');
    })
    .catch((err) => {
      setResponseStatus('put-error');
      console.error(err)
    });
};

export { get, post, put };
