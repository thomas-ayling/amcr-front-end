import { React, useState, useEffect } from 'react';
import Title from './Title';
import MarkdownComponent from '../markdown-component/MarkdownComponent';
import CaseStudyCarousel from '../carousels/case-studies-carousel/CaseStudyCarousel';
import { StyledHr } from '../../styles/styles';
import { put } from '../../service/CaseStudySingleService';
import { runToastNotification } from '../toast-notification/ToastNotification';
import { useNavigate } from 'react-router-dom';
import UndoIcon from '../../assets/images/icons/undo-icon.png';

const EditBody = ({ pageData, setPageData, id }) => {
  const [updatedTitle, setUpdatedTitle] = useState(pageData.title);
  const [updatedBody, setUpdatedBody] = useState(pageData.body);
  const [updatedOverview, setUpdatedOverview] = useState(pageData.overview);
  const [spotlight, setSpotlight] = useState(pageData.spotlight);
  const [updateStatus, setUpdateStatus] = useState(false);

  const [changeHistory, setChangeHistory] = useState([updatedBody]);
  const [historyPointer, setHistoryPointer] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    updateStatus === 'success'
      ? runToastNotification('Update was successful!', 'success')
      : updateStatus === 'error' && runToastNotification('There was an error updating this case study. Please try again', 'error');
    updateStatus === 'success' && setTimeout(() => navigate(`/case-study/${id}`), 500);
  }, [id, navigate, updateStatus]);

  useEffect(() => {
    setUpdatedBody(changeHistory[historyPointer]);
  }, [changeHistory, historyPointer]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCaseStudy = {
      title: updatedTitle,
      overview: updatedOverview,
      body: changeHistory[historyPointer],
      spotlight: spotlight,
    };
    put(id, updatedCaseStudy, setUpdateStatus, setPageData);
  };

  const handleChangeTextarea = (value, index) => {
    let newChangeHistory = [...changeHistory];
    newChangeHistory[historyPointer][index].markdownText = value;
    setChangeHistory(newChangeHistory);
    historyPointer < changeHistory.length - 1 && deleteRedoHistory();
  };

  const handleUndo = () => {
    setHistoryPointer(historyPointer > 0 && historyPointer - 1);
  };

  const handleRedo = () => {
    setHistoryPointer(historyPointer < changeHistory.length - 1 && historyPointer + 1);
  };

  const removeRow = (index) => {
    let newUpdatedBody = [...updatedBody];
    newUpdatedBody.splice(index, 1);
    setUpdatedBody(newUpdatedBody);
    let newChangeHistory = [...changeHistory];
    newChangeHistory.push(newUpdatedBody);
    setChangeHistory(newChangeHistory);
    setHistoryPointer(historyPointer + 1);
  };

  const addRow = () => {
    let newUpdatedBody = [...updatedBody];
    newUpdatedBody.push({
      imageLink: '',
      markdownText: '',
    });
    setUpdatedBody(newUpdatedBody);
    let newChangeHistory = [...changeHistory];
    newChangeHistory.push(newUpdatedBody);
    setChangeHistory(newChangeHistory);
    setHistoryPointer(newChangeHistory.length - 1);
  };

  const deleteRedoHistory = () => {
    let newChangeHistory = [...changeHistory];
    newChangeHistory.splice(historyPointer + 1, changeHistory.length - historyPointer);
    console.log('newChangeHistory', newChangeHistory);
  };

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
      </div>

      <div className='cssp-body-wrapper cssp-body-wrapper-edit'>
        <div className='cssp-body'>
          <form onSubmit={(e) => handleSubmit(e)}>
            <Title text={updatedTitle} />
            <input type='text' className='title-input' value={updatedTitle} onChange={(e) => setUpdatedTitle(e.target.value)} />
            {/* <StyledHr style={{ width: '100%' }} /> */}
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

                  <div className='cssp-body-img'>
                    <img className='' src={item.imageLink} alt={item.title} />
                    {/* Upload new image */}
                    <input type='file' className='cssp-cover-image-upload cssp-cover-image-upload-row' />
                  </div>
                  <div className='cssp-body-text'>
                    <MarkdownComponent markdownText={item.markdownText} />
                    {/* <StyledHr style={{ width: '100%' }} /> */}
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

            <input id='spotlight-checkbox' type='checkbox' checked={spotlight} onChange={(e) => setSpotlight(e.target.checked)} />
            <label htmlFor='spotlight-checkbox'> &nbsp; Show this case study on spotlight carousel?</label>

            {spotlight && (
              <>
                <h1 style={{ textAlign: 'center' }}>Carousel Preview:</h1>

                <CaseStudyCarousel overviews={[updatedOverview]} titles={[updatedTitle]} length={1} pageData={[pageData]} />

                <div className='edit-carousel-container'>
                  <input type='file' className='cssp-cover-image-upload' />
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
