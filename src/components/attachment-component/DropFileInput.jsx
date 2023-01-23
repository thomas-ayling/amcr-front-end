import React, { useEffect, useState, useCallback } from 'react';
import './dropFileInput.css';
import dragAndDropIcon from '../../../src/assets/images/attachment-component/gl-drag-and-drop-logo.png';
import { upload } from '../../service/AttachmentService.js';
import { useDropzone } from 'react-dropzone';
import AttachmentDetails from './AttachmentDetails';

const DropFileInput = () => {
  const [file, setFile] = useState();
  const [responseStatus, setResponseStatus] = useState('');
  const [percentage, setPercentage] = useState(null);
  const [downloadUri, setDownloadUri] = useState(null);

  useEffect(() => {
    console.log('responseStatus', responseStatus)
    console.log('downloadUri', downloadUri)
  }, [responseStatus, downloadUri])
  

  function onFormSubmit(e) {
    e.preventDefault();
    upload(file, setResponseStatus, setDownloadUri);

    // const xhr = new XMLHttpRequest();
    // xhr.upload.onprogress = (event) => {
    //   const percentage = parseInt((event.loaded / event.total) * 100);
    //   setPercentage(percentage);
    // };
    // xhr.onreadystatechange = () => {
    //   if (xhr.readyState !== 4) return;
    //   if (xhr.status !== 200) {
    //   }
    //   setFile();
    //   setPercentage(null);
    // };
    // xhr.open('POST', 'https://httpbin.org/post', true);
    // xhr.send(file);
  }

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      upload(file, setResponseStatus, setDownloadUri);
      const reader = new FileReader();

      const xhr = new XMLHttpRequest();
      xhr.upload.onprogress = (event) => {
        const percentage = parseInt((event.loaded / event.total) * 100);
        setPercentage(percentage);
      };
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== 4) return;
        if (xhr.status !== 200) {
        }
        setFile();
        setPercentage(null);
      };
      xhr.open('POST', 'https://httpbin.org/post', true);
      xhr.send(file);

      reader.onload = () => {
        const binaryStr = reader.result;
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <>
      <div className='drop-file-input'>
        <div className='drop-file-input__label' {...getRootProps()}>
          <input {...getInputProps()} />
          <img className='upload-logo' src={dragAndDropIcon} alt='Drag And Drop Icon' />
          <br />
          <br />
          <p>Drag 'n' drop files here to upload,</p>
          <p>or click to select files</p>
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
      <AttachmentDetails file={file} percentage={percentage} />
    </>
  );
};

export default DropFileInput;
