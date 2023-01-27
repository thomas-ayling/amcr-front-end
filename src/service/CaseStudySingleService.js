import axios from 'axios';
const baseUrl = 'http://localhost:3001/case-study';
// const baseUrl = 'http://ec-acad-elb-a07a79316f54cbbf.elb.eu-west-2.amazonaws.com:3001/case-study';

const get = (id, setPageData, setRequestStatus, setPageLoaded) => {
  axios
    .get(`${baseUrl}/${id}`)
    .then((response) => {

      console.log('response.data.attachmentLinks', response.data.attachmentLinks)

      const TIMEOUT = 100;
      const promises = response.data.attachmentLinks.map((link, index) => {
        return new Promise((resolve, reject) => {
          setTimeout(
            () =>
              axios
                .get(`${link}/metadata`)
                .then((res) => {resolve(res);
                console.log('res.data', res.data)
                })
                .catch((err) => reject(err)),
            TIMEOUT * index
          );
        });
      });
      Promise.all(promises)
        .then((res) => console.log('res.data', res.headers))
        .catch((err) => console.error(err));
      if (response.status === 200) {
        setPageData(response.data);
        setPageLoaded(true);
      }
    })
    .catch((err) => {
      setRequestStatus(err.status === 404 ? 'error-404' : 'other-error');
    });
};


const put = (id, updatedCaseStudy, setUpdateStatus, setPageData) => {
  axios
    .put(`${baseUrl}/${id}`, updatedCaseStudy)
    .then((response) => {
      setUpdateStatus('success');
      setPageData(response.data);
    })
    .catch((err) => {
      setUpdateStatus('error', err);
    });
};

export { get, put };