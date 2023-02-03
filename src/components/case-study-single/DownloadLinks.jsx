import React from 'react';

const DownloadLinks = ({ attachmentMetadata }) => {
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
      </div>
    ));

    return <div className='cssp-download-link-container'>{buttons}</div>;
  }
};

export default DownloadLinks;
