import axios from 'axios';
const baseUrl = 'http://localhost:3001/case-study';

const get = (setPageData, setRequestStatus, setPageLoaded) => {
  axios
    .get(`${baseUrl}/overviews?spotlit=true`)
    .then((response) => {
      if (response.status === 200) {
        setPageData(response.data);
        setPageLoaded(true);
      }
    })
    .catch((err) => {
      setRequestStatus(err.status === 404 ? 'error-404' : 'other-error');
    });
};

export { get };
