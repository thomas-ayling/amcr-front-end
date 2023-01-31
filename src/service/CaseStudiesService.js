import axios from 'axios';
const baseUrl = 'http://localhost:3001/case-study';
// const baseUrl = 'http://ec-acad-elb-a07a79316f54cbbf.elb.eu-west-2.amazonaws.com:3001/case-study';

const get = (setCarouselData, setCarouselLoaded, setHeaderCarouselData, setHeaderCarouselLoaded, setRequestStatus) => {
  let error = false;
  axios
    .get(`${baseUrl}/overviews?spotlit=true`)
    .then((response) => {
      if (response.status === 200) {
        setCarouselData(response.data);
        setCarouselLoaded(true);
        if (!error) {
          setRequestStatus('success');
        }
      }
    })
    .catch((err) => {
      setRequestStatus(err.status === 404 ? 'error-404' : 'other-error');
      error = true;
    });

  axios
    .get(`${baseUrl}/overviews?latest=true&entries=6`)
    .then((response) => {
      if (response.status === 200) {
        setHeaderCarouselData(
          response.data.map((element) => {
            return {
              title: element.title,
              image: element.coverImageLink,
              id: element.id,
            };
          })
        );

        setHeaderCarouselLoaded(true);
        if (!error) {
          setRequestStatus('success');
        }
      }
    })
    .catch((err) => {
      setRequestStatus(err.status === 404 ? 'error-404' : 'other-error');
      error = true;
    });
};

export { get };
