import React, {useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Body from '../components/case-study-single/Body';
import EditBody from '../components/case-study-single/EditBody';
import ContactComponent from '../components/contact-component/ContactComponent';
import LoaderGif from '../components/shared-components/LoaderGif';
import { get } from '../service/CaseStudySingleService';
import './styles/CaseStudySingle.css';

const CaseStudySingle = ({ editMode }) => {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [pageData, setPageData] = useState({});
  const [requestStatus, setRequestStatus] = useState();
  const [attachmentMetadata, setAttachmentMetadata] = useState();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    get(id, setPageData, setRequestStatus, setPageLoaded, setAttachmentMetadata);
  }, [id]);

  useEffect(() => {
    if (requestStatus === 'error-404') console.error(`Case study with id ${id} could not be found`);
  }, [requestStatus, id]);

  if (pageLoaded && editMode) {
    return (
      <div className='cssp-container'>
        <EditBody pageData={pageData} setPageData={setPageData} setAttachmentMetadata={setAttachmentMetadata} attachmentMetadata={attachmentMetadata} id={id} />
      </div>
    );
  }

  if (pageLoaded && !editMode) {
    return (
      <div className='cssp-container'>
        <Body body={pageData.body} title={pageData.title} attachmentMetadata={attachmentMetadata} />
        <ContactComponent feedbackType='case-study' />
        <button className="case-study-edit-button" onClick={() => navigate(`/case-study/edit/${id}`)}>Edit this page</button>
      </div>
    );
  }
  if (!pageLoaded) {
    return <LoaderGif />;
  }
};

export default CaseStudySingle;
