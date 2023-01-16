import axios from 'axios';

const baseUrl = 'http://localhost:3001/attachments';

function upload(attachment, setResponseStatus) {
  const formData = new FormData();
  if (attachment) {
    formData.append('attachment', attachment);
  }

  const url = `${baseUrl}/`;
  const headers = {
    headers: {
      'content-type': 'multipart/form-data',
    },
  };
  axios
    .post(url, formData, headers)
    .then((res) => {
      console.dir(res);
      setResponseStatus('success');
    })
    .catch((error) => {
      console.error(error.status);
      setResponseStatus('error', error.status);
    });
}

export { upload };
