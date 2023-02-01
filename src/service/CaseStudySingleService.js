import axios from 'axios';
import { getMetadata } from './AttachmentMetadataService.js';
import { partial } from 'filesize';
// const baseUrl = 'http://localhost:3001/case-study';
const baseUrl = 'http://ec-acad-elb-a07a79316f54cbbf.elb.eu-west-2.amazonaws.com:3001/case-study';
const get = (id, setPageData, setRequestStatus, setPageLoaded, setAttachmentMetadata) => {
  axios
    .get(`${baseUrl}/${id}`)
    .then((response) => {
      getMetadata(response.data.attachmentLinks, setAttachmentMetadata);
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
