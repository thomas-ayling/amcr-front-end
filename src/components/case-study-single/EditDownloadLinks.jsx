import { useState, useEffect, React } from 'react';
import { uploadAttachment } from '../../service/AttachmentService';
import { runToastNotification } from '../toast-notification/ToastNotification';
import { getMetadata } from '../../service/AttachmentMetadataService';

const DownloadLinks = ({ attachmentMetadata, setAttachmentMetadata, attachmentLinks, setAttachmentLinks }) => {
  const [responseStatus, setResponseStatus] = useState('idle');
  const [downloadUri, setDownloadUri] = useState();
  const [newIndex, setNewIndex] = useState();

  useEffect(() => {
<<<<<<< HEAD
    if (responseStatus === 'success') runToastNotification('Attachment uploaded successfuly. Press save and refresh to see chages', 'success');
=======
    if (responseStatus === 'success') runToastNotification('Attachment uploaded successfuly', 'success');
>>>>>>> 5cbe1cbca926b7a4b40e5724bfe63af4198aa746
    if (responseStatus === 'error') runToastNotification('There was an error uploading this attachment', 'error');
    return () => {
      setResponseStatus('idle');
    };
  }, [responseStatus]);

  useEffect(() => {
<<<<<<< HEAD
      const newAttachmentLinks = [...attachmentLinks];
      newAttachmentLinks[newIndex] = downloadUri;
      setAttachmentLinks(newAttachmentLinks);
      getMetadata(newAttachmentLinks, setAttachmentMetadata);
=======
    const newAttachmentLinks = [...attachmentLinks];
    newAttachmentLinks[newIndex] = downloadUri;
    setAttachmentLinks(newAttachmentLinks);
    getMetadata(newAttachmentLinks, setAttachmentMetadata);
>>>>>>> 5cbe1cbca926b7a4b40e5724bfe63af4198aa746
  }, [downloadUri]);

  const handleChangeFile = (attachment, index) => {
    uploadAttachment(attachment, setResponseStatus, setDownloadUri);
<<<<<<< HEAD
    setNewIndex(index);
=======
    setNewIndex(index)
>>>>>>> 5cbe1cbca926b7a4b40e5724bfe63af4198aa746
  };

  if (attachmentMetadata) {
    const downloadFile = (link) => {
      window.open(link);
      return false;
    };

    const buttons = attachmentMetadata.map((attachment, index) => (
      <div key={index}>
        <button type='button' onClick={() => downloadFile(attachment.link)} className='cssp-download-button'>
          {attachment.type} version({attachment.size})
        </button>
        <input type='file' onChange={(e) => handleChangeFile(e.target.files[0], index)} />
      </div>
    ));

    return <div className='cssp-download-link-container'>{buttons}</div>;
  }
};

export default DownloadLinks;
