import { React, useState, useEffect } from 'react';
import Title from './Title';
import MarkdownComponent from '../markdown-component/MarkdownComponent';
import CaseStudyCarousel from '../carousels/case-studies-carousel/CaseStudyCarousel';
import { StyledHr } from '../../styles/styles';
import { put } from '../../service/CaseStudySingleService';
import { uploadAttachment } from '../../service/AttachmentService.js';
import { runToastNotification } from '../toast-notification/ToastNotification';
import { useNavigate } from 'react-router-dom';
import UndoIcon from '../../assets/images/icons/undo-icon.png';
import EditDownloadLinks from './EditDownloadLinks';
import '../../pages/styles/CaseStudySingle.css';
import EditDownloadLinks from './EditDownloadLinks';

<<<<<<< HEAD
const EditBody = ({ pageData, setPageData, setAttachmentMetadata, attachmentMetadata, id }) => {
=======
const EditBody = ({ pageData, setPageData, attachmentMetadata, setAttachmentMetadata, id }) => {
>>>>>>> 5cbe1cbca926b7a4b40e5724bfe63af4198aa746
  const [updatedTitle, setUpdatedTitle] = useState(pageData.title);
  const [updatedBody, setUpdatedBody] = useState(pageData.body);
  const [updatedOverview, setUpdatedOverview] = useState(pageData.overview);
  const [updatedCoverImageLink, setUpdatedCoverImageLink] = useState();
  const [spotlight, setSpotlight] = useState(pageData.spotlight);
  const [updateStatus, setUpdateStatus] = useState(false);
  const [changeHistory, setChangeHistory] = useState([updatedBody]);
  const [attachmentLinks, setAttachmentLinks] = useState();
  const [historyPointer, setHistoryPointer] = useState(0);
  const [responseStatus, setResponseStatus] = useState(null);
  const [attachmentLinks, setAttachmentLinks] = useState();
  const [coverImageUri, setCoverImageUri] = useState();
  const [downloadUri, setDownloadUri] = useState();
  const [newIndex, setNewIndex] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    if (pageData) {
      setAttachmentLinks(pageData.attachmentLinks);
<<<<<<< HEAD
    }
  }, [pageData]);

  useEffect(() => {
    if (changingImage === 'cover-image') {
      setUpdatedCoverImageLink(downloadUri);
      let newPageData = pageData;
      newPageData.coverImageLink = downloadUri;
      setPageData(newPageData);
=======
>>>>>>> 5cbe1cbca926b7a4b40e5724bfe63af4198aa746
    }
  }, [pageData]);

  useEffect(() => {
    if (responseStatus !== null && responseStatus !== undefined) {
      responseStatus.includes('success') && runToastNotification('Image uploaded successfuly', 'success');
    }
    return () => {
      setResponseStatus(null);
    };
  }, [responseStatus]);

  useEffect(() => {
<<<<<<< HEAD
    updateStatus === 'success' ? runToastNotification('Update was successful!', 'success') : updateStatus === 'error' && runToastNotification('There was an error updating this case study. Please try again', 'error');
    updateStatus === 'success' &&
      setTimeout(() => {
        navigate(`/case-study/${id}`);
      }, 500);
=======
    updateStatus === 'success'
      ? runToastNotification('Update was successful!', 'success')
      : updateStatus === 'error' && runToastNotification('There was an error updating this case study. Please try again', 'error');
    updateStatus === 'success' && setTimeout(() => navigate(`/case-study/${id}`), 500);
>>>>>>> 5cbe1cbca926b7a4b40e5724bfe63af4198aa746
    return () => {
      setUpdateStatus(undefined);
    };
  }, [id, navigate, updateStatus]);

  useEffect(() => {
    setUpdatedBody(changeHistory[historyPointer]);
  }, [changeHistory, historyPointer]);

  useEffect(() => {
    if (newIndex && downloadUri) {
      const newUpdatedBody = [...updatedBody];
      newUpdatedBody[newIndex].imageId = downloadUri;
      setUpdatedBody(newUpdatedBody);
      const newChangeHistory = [...changeHistory];
      newChangeHistory[historyPointer] = newUpdatedBody;
      setChangeHistory(newChangeHistory);
    }
  }, [downloadUri, newIndex]);

  useEffect(() => {
    setUpdatedCoverImageLink(coverImageUri);
    const newPageData = pageData;
    newPageData.coverImageLink = coverImageUri;
    setPageData(newPageData);
  }, [coverImageUri]);

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let row of changeHistory[historyPointer]) {
      if (row.imageId === '') {
        runToastNotification('Please make sure all rows have images', 'error');
        return;
      }
    }
<<<<<<< HEAD
=======

>>>>>>> 5cbe1cbca926b7a4b40e5724bfe63af4198aa746
    const body = changeHistory[historyPointer].map((row) => ({ markdownText: row.markdownText, imageId: row.imageId.split('/attachment/')[1] }));
    const coverImageId = updatedCoverImageLink ? updatedCoverImageLink.split('/attachment/')[1] : pageData.coverImageId;
    const attachmentIds = attachmentLinks.map((link) => link.split('/attachment/')[1]);

    const updatedCaseStudy = {
      title: updatedTitle,
      overview: updatedOverview,
      body: body,
      coverImageId: coverImageId,
      attachmentIds: attachmentIds,
      spotlight: spotlight,
    };
    put(id, updatedCaseStudy, setUpdateStatus, setPageData);
  };

  const addRow = () => {
    const newUpdatedBody = [...updatedBody];
    newUpdatedBody.push({
      imageId: '',
      markdownText: '',
    });
    setUpdatedBody(newUpdatedBody);
    const newChangeHistory = [...changeHistory];
    newChangeHistory.push(newUpdatedBody);
    setChangeHistory(newChangeHistory);
    setHistoryPointer(newChangeHistory.length - 1);
  };

  const removeRow = (index) => {
    const newUpdatedBody = [...updatedBody];
    newUpdatedBody.splice(index, 1);
    setUpdatedBody(newUpdatedBody);
    const newChangeHistory = [...changeHistory];
    newChangeHistory.push(newUpdatedBody);
    setChangeHistory(newChangeHistory);
    setHistoryPointer(historyPointer + 1);
  };

  const handleUndo = () => {
    setHistoryPointer(historyPointer > 0 && historyPointer - 1);
  };

  const handleRedo = () => {
    setHistoryPointer(historyPointer < changeHistory.length - 1 && historyPointer + 1);
  };

  const deleteRedoHistory = () => {
    const newChangeHistory = [...changeHistory];
    newChangeHistory.splice(historyPointer + 1, changeHistory.length - historyPointer);
  };

  const handleChangeTextarea = (value, index) => {
    const newChangeHistory = [...changeHistory];
    newChangeHistory[historyPointer][index].markdownText = value;
    setChangeHistory(newChangeHistory);
    historyPointer < changeHistory.length - 1 && deleteRedoHistory();
  };

  const handleChangeRowImage = (file, index) => {
    if (!file.type.startsWith('image')) {
      runToastNotification('Attachment must be an image.', 'error');
      return;
    }
    uploadAttachment(file, setResponseStatus, setDownloadUri);
    setNewIndex(index);
  };

  const handleChangeCoverImage = (file) => {
    if (!file.type.startsWith('image')) {
      runToastNotification('Attachment must be an image.', 'error');
      return;
    }
    uploadAttachment(file, setResponseStatus, setCoverImageUri);
  };

<<<<<<< HEAD
  if (attachmentLinks)
    return (
      <>
        <div className='cssp-undo-redo-buttons-container'>
          <p className='cssp-edit-p'>UNDO/REDO ROW DELETIONS</p>
          <button onClick={handleUndo} className={`cssp-undo-button ${historyPointer === 0 && 'cssp-undo-button-invalid'}`} title='Undo Changes'>
            <img src={UndoIcon} className='cssp-undo-img' alt='undo button' />
          </button>
          <button onClick={handleRedo} className={`cssp-redo-button ${historyPointer >= changeHistory.length - 1 && 'cssp-redo-button-invalid'}`} title='Redo Changes'>
            <img src={UndoIcon} className='cssp-redo-img' alt='redo button' />
          </button>
=======
  if (attachmentLinks) return (
    <>
      <div className='cssp-undo-redo-buttons-container'>
        <p className='cssp-edit-p'>UNDO/REDO ROW DELETIONS</p>
        <button onClick={handleUndo} className={`cssp-undo-button ${historyPointer === 0 && 'cssp-undo-button-invalid'}`} title='Undo Changes'>
          <img src={UndoIcon} className='cssp-undo-img' alt='undo button' />
        </button>
        <button onClick={handleRedo} className={`cssp-redo-button ${historyPointer >= changeHistory.length - 1 && 'cssp-redo-button-invalid'}`} title='Redo Changes'>
          <img src={UndoIcon} className='cssp-redo-img' alt='redo button' />
        </button>
      </div>
      <div className='cssp-body-wrapper cssp-body-wrapper-edit'>
        <div className='cssp-body'>
          <form onSubmit={(e) => handleSubmit(e)}>
            <Title text={updatedTitle} />
            <input type='text' className='title-input' value={updatedTitle} onChange={(e) => setUpdatedTitle(e.target.value)} />
            {changeHistory[historyPointer].map((item, index) => (
              <div key={index}>
                <StyledHr style={{ width: '100%' }} />
                <div className={`cssp-body-row-edit cssp-${index % 2 === 0 ? 'regular' : 'reversed'}-row-edit`} key={index}>
                  <h3 className='cssp-row-num'>Row no. {index + 1}</h3>
                  <div className='cssp-edit-buttons-contaier'>
                    <button className='cssp-delete-row-button cssp-edit-button' onClick={() => removeRow(index)} type='button'>
                      Delete row
                    </button>
                  </div>
                  <div className='cssp-body-img-container'>
                    <div className='cssp-body-img'>
                      <img className='cssp-image' src={item.imageId} alt={item.title} />
                    </div>
                    <h4>Upload new image:</h4>
                    <input
                      type='file'
                      className='cssp-row-image-upload'
                      onChange={(e) => {
                        handleChangeRowImage(e.target.files[0], index);
                      }}
                    />
                  </div>
                  <div className='cssp-body-text'>
                    <MarkdownComponent markdownText={item.markdownText} />
                    <textarea className='cssp-text-edit cssp-textarea-edit' value={item.markdownText} onChange={(e) => handleChangeTextarea(e.target.value, index)} />
                  </div>
                </div>
              </div>
            ))}
            <StyledHr style={{ width: '100%' }} />
            <div className='cssp-add-new-row-container'>
              <button type='button' onClick={addRow} className='cssp-add-row-button cssp-edit-button'>
                + Add new row
              </button>
            </div>
            <StyledHr style={{ width: '100%' }} />
            <EditDownloadLinks attachmentMetadata={attachmentMetadata} setAttachmentMetadata={setAttachmentMetadata} attachmentLinks={attachmentLinks} setAttachmentLinks={setAttachmentLinks} />
            <StyledHr style={{ width: '100%' }} />
            <input id='spotlight-checkbox' type='checkbox' checked={spotlight} onChange={(e) => setSpotlight(e.target.checked)} />
            <label htmlFor='spotlight-checkbox'> &nbsp; Show this case study on spotlight carousel?</label>
            {spotlight && (
              <>
                <h1 style={{ textAlign: 'center' }}>Carousel Preview:</h1>
                <CaseStudyCarousel pageData={[pageData]} />
                <div className='edit-carousel-container'>
                  <input type='file' className='cssp-cover-image-upload' onChange={(e) => handleChangeCoverImage(e.target.files[0])} />
                  <textarea className='cssp-overview-edit cssp-textarea-edit' value={updatedOverview} onChange={(e) => setUpdatedOverview(e.target.value)} />
                </div>
              </>
            )}
            <input type='submit' className='cssp-submit-edit' value='Save changes' />
          </form>
>>>>>>> 5cbe1cbca926b7a4b40e5724bfe63af4198aa746
        </div>
        <div className='cssp-body-wrapper cssp-body-wrapper-edit'>
          <div className='cssp-body'>
            <form onSubmit={(e) => handleSubmit(e)}>
              <Title text={updatedTitle} />
              <input type='text' className='title-input' value={updatedTitle} onChange={(e) => setUpdatedTitle(e.target.value)} />
              {changeHistory[historyPointer].map((item, index) => (
                <div key={index}>
                  <StyledHr style={{ width: '100%' }} />
                  <div className={`cssp-body-row-edit cssp-${index % 2 === 0 ? 'regular' : 'reversed'}-row-edit`} key={index}>
                    <h3 className='cssp-row-num'>Row no. {index + 1}</h3>
                    <div className='cssp-edit-buttons-contaier'>
                      <button className='cssp-delete-row-button cssp-edit-button' onClick={() => removeRow(index)} type='button'>
                        Delete row
                      </button>
                    </div>
                    <div className='cssp-body-img-container'>
                      <div className='cssp-body-img'>
                        <img className='cssp-image' src={item.imageId} alt={item.title} />
                      </div>
                      <h4>Upload new image:</h4>
                      <input
                        type='file'
                        className='cssp-row-image-upload'
                        onChange={(e) => {
                          handleChangeRowImage(e.target.files[0], index);
                        }}
                      />
                    </div>
                    <div className='cssp-body-text'>
                      <MarkdownComponent markdownText={item.markdownText} />
                      <textarea className='cssp-text-edit cssp-textarea-edit' value={item.markdownText} onChange={(e) => handleChangeTextarea(e.target.value, index)} />
                    </div>
                  </div>
                </div>
              ))}
              <StyledHr style={{ width: '100%' }} />
              <div className='cssp-add-new-row-container'>
                <button type='button' onClick={addRow} className='cssp-add-row-button cssp-edit-button'>
                  + Add new row
                </button>
              </div>
              <StyledHr style={{ width: '100%' }} />
              <EditDownloadLinks attachmentMetadata={attachmentMetadata} setAttachmentMetadata={setAttachmentMetadata} attachmentLinks={attachmentLinks} setAttachmentLinks={setAttachmentLinks} />
              <StyledHr style={{ width: '100%' }} />
              <input id='spotlight-checkbox' type='checkbox' checked={spotlight} onChange={(e) => setSpotlight(e.target.checked)} />
              <label htmlFor='spotlight-checkbox'> &nbsp; Show this case study on spotlight carousel?</label>
              {spotlight && (
                <>
                  <h1 style={{ textAlign: 'center' }}>Carousel Preview:</h1>
                  <CaseStudyCarousel pageData={[pageData]} />
                  <div className='edit-carousel-container'>
                    <input type='file' className='cssp-cover-image-upload' onChange={(e) => handleChangeCoverImage(e.target.files[0])} />
                    <textarea className='cssp-overview-edit cssp-textarea-edit' value={updatedOverview} onChange={(e) => setUpdatedOverview(e.target.value)} />
                  </div>
                </>
              )}
              <input type='submit' className='cssp-submit-edit' value='Save changes' />
            </form>
          </div>
        </div>
      </>
    );
};

export default EditBody;
