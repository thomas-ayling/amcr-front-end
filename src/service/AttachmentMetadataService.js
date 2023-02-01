import axios from 'axios';
import { partial } from 'filesize';

const getMetadata = (attachmentLinks, setAttachmentMetadata) => {
  const bytesToReadable = partial({ base: 2, standard: 'jedec' });
  const TIMEOUT = 100;
  const headers = { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "*", "Access-Control-Allow-Credentials": "true" };
  const promises = attachmentLinks.map((link, index) => {
    return new Promise((resolve, reject) => {
      setTimeout(
        () =>
          axios
            .get(`${link}/metadata`, {headers: headers})
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
          type: item.data.type.split('/')[1].toUpperCase(),
          link: attachmentLinks[index],
        }))
      );
    })
    .catch((err) => console.error(err));
};

export { getMetadata };
