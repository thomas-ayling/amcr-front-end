import React, { useEffect, useState, useCallback } from 'react';
import './dropFileInput.css';
import { upload } from '../../service/AttachmentService.js';
import { useDropzone } from 'react-dropzone';
import AttachmentDetails from './AttachmentDetails';
import { runToastNotification } from '../toast-notification/ToastNotification';

const DropFileInput = () => {
  const [file, setFile] = useState();
  const [responseStatus, setResponseStatus] = useState('');
  const [downloadUri, setDownloadUri] = useState(null);

  useEffect(() => {
    if (responseStatus != null) {
      runToastNotification(responseStatus, responseStatus.includes('successfully') ? 'success' : responseStatus.includes('error') && 'error');
      setResponseStatus(null);
    }
  }, [responseStatus]);

  function onFormSubmit(e) {
    e.preventDefault();
    upload(file, setResponseStatus, setDownloadUri);
    setFile();
  }

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      upload(file, setResponseStatus, setDownloadUri);
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <>
      <div className='drop-file-input'>
        <div className='drop-file-input__label' {...getRootProps()}>
          <input {...getInputProps()} />
          <p>Drag and drop files here to upload, or click to select files and automatically start uploading.</p>
          <p>Max file size: 50MB</p>
        </div>
      </div>
      <form className='attachment-form-button-wrapper' onSubmit={(e) => onFormSubmit(e)}>
        <label htmlFor='file-upload' className='attachment-button'>
          Choose File
        </label>
        <input
          id='file-upload'
          type='file'
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
        <button className='attachment-button1' type='submit'>
          Upload
        </button>
      </form>
      <AttachmentDetails file={file} />
    </>
  );
};

export default DropFileInput;
