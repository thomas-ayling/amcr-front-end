import axios from 'axios';

const baseUrl = 'http://ec-acad-elb-a07a79316f54cbbf.elb.eu-west-2.amazonaws.com:3001/contacts';
// const baseUrl = 'http://localhost:3001';
const getSpotlit = (setCarouselData, setResponseStatus) => {
  axios
    .get(`${baseUrl}/spotlight`)
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
