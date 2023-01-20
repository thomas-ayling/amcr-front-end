import { React, useState, useEffect } from 'react';
import Title from './Title';
import MarkdownComponent from '../markdown-component/MarkdownComponent';
import CaseStudyCarousel from '../case-studies-carousel/CaseStudyCarousel';
import { StyledHr } from '../../styles/styles';
import { put } from '../../service/CaseStudySingleService';
import { runToastNotification } from '../toast-notification/ToastNotification';
import { useNavigate } from 'react-router-dom';
import UndoIcon from '../../assets/images/icons/undo-icon.png';

const EditBody = ({ body, title, overview, pageData, setPageData, id }) => {
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedBody, setUpdatedBody] = useState(body);
  const [updatedOverview, setUpdatedOverview] = useState(overview);
  const [updateStatus, setUpdateStatus] = useState(false);

  const [changeHistory, setChangeHistory] = useState([pageData])
  const [historyPointer, setHistoryPointer ] = useState(0)

  const navigate = useNavigate();

  useEffect(() => {
    updateStatus === 'success' ? runToastNotification('Update was successful!', 'success') : updateStatus === 'error' && runToastNotification('There was an error updating this case study. Please try again', 'error');
    updateStatus === 'success' && setTimeout(() => navigate(`/case-study/${id}`), 500);
  }, [id, navigate, updateStatus]);

  

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCaseStudy = {
      title: updatedTitle,
      overview: updatedOverview,
      body: { content: updatedBody },
    };
    put(id, updatedCaseStudy, setUpdateStatus, setPageData);
  };

  const handleChangeTextarea = (value, index) => {
    let newBody = [...updatedBody];
    newBody[index].markdownText = value;
    setUpdatedBody(newBody);
  };

  const handleUndo = () => {};

  const handleRedo = () => {};

  const removeRow = (index) => {
    let newUpdatedBody = [...updatedBody];
    newUpdatedBody.splice(index, index);
    setUpdatedBody(newUpdatedBody);
    let newChangeHistory = [...changeHistory];
    newChangeHistory.push(newUpdatedBody);
    setChangeHistory(newChangeHistory);
    setHistoryPointer(historyPointer + 1);
  };

  return (
    <>
      <div className='cssp-undo-redo-buttons-container'>
        <button onClick={handleUndo} className={`cssp-undo-button ${historyPointer === 0 && 'cssp-undo-button-invalid'}`} title="Undo Changes">
          <img src={UndoIcon} className='cssp-undo-img' alt="undo button" />
        </button>
        <button onClick={handleRedo} className={`cssp-redo-button ${historyPointer >= changeHistory.length - 1 && 'cssp-redo-button-invalid'}`} title="Redo Changes">
          <img src={UndoIcon} className='cssp-redo-img' alt="redo button" />
        </button>
      </div>

      <div className='cssp-body-wrapper cssp-body-wrapper-edit'>
        <div className='cssp-body'>
          <form onSubmit={(e) => handleSubmit(e)}>
            <Title text={updatedTitle} />
            <StyledHr style={{ width: '100%' }} />
            <input type='text' className='title-input' value={updatedTitle} onChange={(e) => setUpdatedTitle(e.target.value)} />
            {updatedBody.map((item, index) => (
              <>
                <div className={`cssp-body-row-edit cssp-${index % 2 === 0 ? 'regular' : 'reversed'}-row-edit`} key={index}>
                  <div className='cssp-edit-buttons-contaier'>
                    <button className='cssp-delete-row-button' onClick={() => removeRow(index)}>
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
                <StyledHr style={{ width: '100%' }} />
              </>
            ))}
            <StyledHr style={{ width: '100%' }} />

            <h1 style={{ textAlign: 'center' }}>Carousel Preview:</h1>

            <CaseStudyCarousel overviews={[updatedOverview]} titles={[updatedTitle]} length={1} pageData={[pageData]} />

            <div className='edit-carousel-container'>
              <input type='file' className='cssp-cover-image-upload' />
              <textarea className='cssp-overview-edit cssp-textarea-edit' value={updatedOverview} onChange={(e) => setUpdatedOverview(e.target.value)} />
            </div>

            <input type='submit' className='cssp-submit-edit' value='Save changes' />
          </form>
        </div>
      </div>
    </>
  );
};

export default EditBody;
