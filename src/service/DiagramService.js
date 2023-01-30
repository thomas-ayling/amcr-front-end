import axios from 'axios';

const baseUrl = 'http://ec-acad-elb-a07a79316f54cbbf.elb.eu-west-2.amazonaws.com:3001';
// const baseUrl = 'http://localhost:3001';
const id = '99ffb583-6dc1-4e5c-8448-c2c3d8983b28';

const get = (setNodeArray, setRequestStatus) => {
  axios
    .get(`${baseUrl}/diagram/${id}`)
    .then((res) => {
      if (res.status === 200) setNodeArray(res?.data?.nodes);
    })
    .catch((error) => {
      setRequestStatus(error.status === 404 ? 'error-404' : 'other-get-error');
    });
};

const put = (nodeArray, setChangesConfirmed, setRequestStatus) => {
  axios
    .put(`${baseUrl}/diagram/${id}`, { nodes: nodeArray })
    .then((res) => {
      if (res.status === 202) setChangesConfirmed(true);
    })
    .catch((error) => {
      setRequestStatus(error.status === 404 ? 'error-404' : 'other-put-error');
    });
};

export { get, put };
