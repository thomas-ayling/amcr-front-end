import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Body from '../components/case-study-single/Body';
import ContactComponent from '../components/contact-component/ContactComponent';
import Loader from '../components/shared-components/Loader';
import { get } from '../service/CaseStudySingleService';
import './styles/CaseStudySingle.css';

const CaseStudySingle = () => {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [pageData, setPageData] = useState({});
  const [requestStatus, setRequestStatus] = useState();

  const { id } = useParams();

  useEffect(() => {
    get(id, setPageData, setRequestStatus, setPageLoaded);
    if (requestStatus === 'error-404') console.error('Case study with id ${id} could not be found');
  }, []);

  if (pageLoaded) {
    return (
      <div className='cssp-container'>
        <Body pageData={pageData} />
        <ContactComponent feedbackType='case-study' />
      </div>
    );
  }
  if (!pageLoaded) {
    return <Loader />;
  }
};

export default CaseStudySingle;
