import axios from 'axios';
import { partial } from 'filesize';
const baseUrl = 'http://localhost:3001/case-study';
// const baseUrl = 'http://ec-acad-elb-a07a79316f54cbbf.elb.eu-west-2.amazonaws.com:3001/case-study';

const get = (id, setPageData, setRequestStatus, setPageLoaded, setAttachmentMetadata) => {
  const bytesToReadable = partial({ base: 2, standard: 'jedec' })
  axios
    .get(`${baseUrl}/${id}`)
    .then((response) => {
      const TIMEOUT = 100;
      const promises = response.data.attachmentLinks.map((link, index) => {
        return new Promise((resolve, reject) => {
          setTimeout(
            () =>
              axios
                .get(`${link}/metadata`)
                .then((res) => resolve(res))
                .catch((err) => reject(err)),
            TIMEOUT * index
          );
        });
      });
      Promise.all(promises)
        .then((res) => {
          setAttachmentMetadata(
            res.map((item, index) => ({
              name: item.data.name,
              size: bytesToReadable(item.data.size),
              type: item.data.type.split("/")[1].toUpperCase(),
              link: response.data.attachmentLinks[index],
            }))
          );
        })
        .catch((err) => console.error(err));
      setPageData(response.data);
      setPageLoaded(true);
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
