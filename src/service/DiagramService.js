import axios from 'axios';
import { runToastNotification } from '../components/toast-notification/ToastNotification.jsx';

// const baseUrl = 'http://ec-acad-elb-a07a79316f54cbbf.elb.eu-west-2.amazonaws.com:3001';
const baseUrl = 'http://localhost:3001';

const get = (setNodeData) => {
  axios
    .get(`${baseUrl}/page-content/diagram/`)
    .then((res) => {
      res?.data?.map((elem) => {
        setNodeData((prevNodeData) => ({ ...prevNodeData, [elem.nodePosition]: { title: elem.title, body: elem.body } }));
      });
    })
    .catch((error) => {
      console.log(error);
      runToastNotification('Could not load diagram data', 'error');
    });
};

const put = (i, output, setChangesConfirmed) => {
  axios
    .put(`${baseUrl}/page-content/diagram/node`, output)
    .then(() => {
      setChangesConfirmed(true);
    })
    .catch((error) => {
      console.log(error);
      runToastNotification('Could not update diagram data', 'error');
    });
};

export { get, put };
