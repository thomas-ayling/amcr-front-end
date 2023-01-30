import React from 'react';

const DownloadLinks = ({ attachmentMetadata, attachmentLinks, setAttachmentLinks }) => {
    const handleChangeFile = (file, index) => {
        

        const newAttachmentLinks = [...attachmentLinks];
        newAttachmentLinks[index] = 
    }

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
