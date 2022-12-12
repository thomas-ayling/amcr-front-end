import React, { useState } from 'react';
import FileIcon from '../../../../resources/icons/file-icon.png';

const AttachmentInput = ({ setAttachment }) => {
  const [fileName, setFileName] = useState('Add file');

  const setAttachmentWithChecks = (file) => {
    if (file.size > 5242880) {
      alert('This file is too large. Files must be under 5MB to be uploaded.');
      return;
    }
    setAttachment(file);
    setFileName(file.name);
  };

  return (
    <>
      <label htmlFor='attachment-input' className='attachment-input-label'>
        <span id='chosen-file' className='chosen-file'>
          {fileName}
        </span>
        <img src={FileIcon} alt='' id='file-icon' />
      </label>
      <input type='file' name='attachment-input' id='attachment-input' className='attachment-input contact-form-input' onChange={(e) => setAttachmentWithChecks(e.target.files[0])} hidden />
    </>
  );
};

export default AttachmentInput;
