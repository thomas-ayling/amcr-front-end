import React, { useState, useEffect } from 'react';
import ArrowIcon from '../assets/images/icons/arrow-icon.png';
import { get, getCount } from '../service/FeedbackService';
import { ImCross } from 'react-icons/im';

import './styles/AdminPanel.css';
import DropFileInput from '../../src/components/attachment-component/DropFileInput';
import { StyledHr } from '../styles/styles';
import { runToastNotification } from '../components/toast-notification/ToastNotification';

const AdminPanel = () => {
  const [last, setLast] = useState();
  const [submitStatus, setSubmitStatus] = useState(0);
  const [response, setResponse] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (last) {
      get(last, setSubmitStatus, setResponse);
    }
  }, [last]);

  useEffect(() => {
    getCount(setCount, setLast, setSubmitStatus);
  }, []);

  useEffect(() => {
    if (submitStatus === 'error') {
      runToastNotification('There was an error loading admin data', 'error');
    }
  }, [submitStatus]);

  const handleLeftClick = () => {
    if (last - 10 > 0) setLast(last - 10);
  };

  const handleRightClick = () => {
    if (last + 10 > count) {
      setLast(count);
      return;
    }
    setLast(last + 10);
  };

  if (response)
    return (
      <>
      <div className='admin-panel-container'>
        <div className='admin-panel-wrapper'>
          <h1 className='admin-panel-title'>All feedback</h1>
          <StyledHr />
          <div className='admin-feedback-panel'>
            <table className='feedback-panel-table'>
              <thead>
                <tr>
                  <th>Feedback type</th>
                  <th>First name</th>
                  <th>Last name</th>
                  <th>Email address</th>
                  <th>Message</th>
                  <th>Book title</th>
                  <th>Book link</th>
                  <th>Attachment link</th>
                </tr>
              </thead>

              <tbody>
                {response.map((row, i) => (
                  <tr key={i}>
                    <td>{row.feedbackType}</td>
                    <td>{row.firstName ? row.firstName : <ImCross fill='red' />}</td>
                    <td>{row.lastName ? row.lastName : <ImCross fill='red' />}</td>
                    <td>{row.emailAddress ? row.emailAddress : <ImCross fill='red' />}</td>
                    <td>{row.feedbackBody ? row.feedbackBody : <ImCross fill='red' />}</td>
                    <td>{row.bookName ? row.bookName : <ImCross fill='red' />}</td>
                    <td className='feedback-panel-link-col'>
                      {row.bookLink ? (
                        <a href={row.bookLink} target='_blank' className='feedback-panel-link'>
                          Book link
                        </a>
                      ) : (
                        <ImCross fill='red' />
                      )}
                    </td>
                    <td className='feedback-panel-link-col'>
                      {row.downloadUri ? (
                        <a href={row.downloadUri} target='_blank' className='feedback-panel-link'>
                          Download attachment
                        </a>
                      ) : (
                        <ImCross fill='red' />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className='admin-buttom-button-container'>
            <div>
              <button type='button' onClick={handleLeftClick} className='admin-bottom-button'>
                <img src={ArrowIcon} alt='arrow icon' className='arrow-icon left-arrow' />
              </button>
              <button type='button' onClick={handleRightClick} className='admin-bottom-button'>
                <img src={ArrowIcon} alt='arrow icon' className='arrow-icon right-arrow' />
              </button>
            </div>
            <span>
              {last}-{last - 10 < 0 ? 0 : last - 10}/{count}
            </span>
          </div>
        </div>
      </div>
      <div className='drag-and-drop-box'>
        <DropFileInput />
      </div>
      </>
    );
};

export default AdminPanel;
