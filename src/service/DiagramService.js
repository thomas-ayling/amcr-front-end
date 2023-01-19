import axios from 'axios';
import { runToastNotification } from '../components/toast-notification/ToastNotification.jsx';

// const baseUrl = 'http://ec-acad-elb-a07a79316f54cbbf.elb.eu-west-2.amazonaws.com:3001';
const baseUrl = 'http://localhost:3001';
const id = '99ffb583-6dc1-4e5c-8448-c2c3d8983b28';

const get = (setNodeArray) => {
  axios
    .get(`${baseUrl}/diagram/${id}`)
    .then((res) => {
      setNodeArray(res?.data?.nodes);
    })
    .catch((error) => {
      console.log(error);
      runToastNotification('Could not load diagram data', 'error');
    });
};

const put = (nodeArray, setChangesConfirmed) => {
  axios
    .put(`${baseUrl}/diagram/${id}`, { nodes: nodeArray })
    .then(() => {
      setChangesConfirmed(true);
    })
    .catch((error) => {
      console.log(error);
      runToastNotification('Could not update diagram data', 'error');
    });
};

export { get, put };
