import { useState, useEffect, React } from 'react';
import { uploadAttachment } from '../../service/AttachmentService';
import { runToastNotification } from '../toast-notification/ToastNotification';

const DownloadLinks = ({ attachmentMetadata, attachmentLinks, setAttachmentLinks }) => {
  const [responseStatus, setResponseStatus] = useState('idle');
  const [downloadUri, setDownloadUri] = useState();

  useEffect(() => {
    if (responseStatus === 'success') runToastNotification('Attachment uploaded successfuly', 'success');
    if (responseStatus === 'error') runToastNotification('There was an error uploading this attachment', 'error');
    const newAttachmentLinks = [...attachmentLinks];
    newAttachmentLinks[index] = downloadUri;
    setAttachmentLinks(newAttachmentLinks);
  }, [downloadUri, responseStatus]);

  const handleChangeFile = (attachment, index) => {
    uploadAttachment(attachment, setResponseStatus, setDownloadUri);
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
