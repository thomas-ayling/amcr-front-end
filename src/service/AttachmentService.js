import axios from 'axios';
import { Crc32c } from '@aws-crypto/crc32c';

const baseUrl = 'http://localhost:3001/attachment/';

function upload(attachment, setResponseStatus, setDownloadUri) {
  const reader = new FileReader();

  reader.onload = (e) => {
    const metadata = {
      name: attachment.name,
      size: attachment.size,
      type: attachment.type,
      crc: new Crc32c().update(new Uint8Array(e.target.result)).digest(),
    };

    console.log('metadata.crc', metadata.crc);

    const headers = { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': '*', 'Access-Control-Allow-Credentials': 'true' };

    axios
      .post(`${baseUrl}`, metadata, { headers: headers })
      .then((response) => {
        axios.put(response.headers.location, e.target.result, { headers: headers }).then(() => {
          setResponseStatus('success');
          setDownloadUri(response.headers.location);
        });
      })
      .catch((err) => {
        setResponseStatus('There was an error uploading this file.', err);
      });
  };

  reader.onerror = (e) => {
    console.error('Error: ', e.type);
  };

  reader.readAsArrayBuffer(attachment);
}

export { upload };
