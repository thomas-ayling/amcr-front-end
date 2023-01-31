import axios from 'axios';

// const baseUrl = 'http://ec-acad-elb-fe-2f7bfb1526a617ef.elb.eu-west-2.amazonaws.com:3001';
const baseUrl = 'http://localhost:3001';
const getSpotlit = (setCarouselData, setResponseStatus) => {
  axios
    .get(`${baseUrl}/contacts/spotlight`)
    .then((res) => {
      if (res.status === 200) {
        setCarouselData(res?.data);
        setResponseStatus('success');
      }
    })
    .catch((error) => {
      setResponseStatus(error.status === 404 ? 'error-404' : 'other-error');
    });
};

export { getSpotlit };
