import React, { useState } from 'react';
import FileIcon from '../../../../resources/icons/file-icon.png';

const AttachmentInput = ({ setAttachment }) => {
  const [fileName, setFileName] = useState('No file');

  return (
    <div className='attachment-input-container'>
      <label htmlFor='attachment-input' className='attachment-input-label'>
        Choose file&nbsp;
        <img src={FileIcon} alt='' id='file-icon' />
      </label>
      <span id='chosen-file' className='chosen-file'>
        {fileName}
      </span>
      <input
        type='file'
        name='attachment-input'
        id='attachment-input'
        className='attachment-input contact-form-input'
        onChange={(e) => (setAttachment(e.target.files[0]), setFileName(e.target.files[0].name))}
        hidden
      />
    </div>
  );
};

export default AttachmentInput;
