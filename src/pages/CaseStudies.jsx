import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ContactComponent from '../components/contact-component/ContactComponent';
import CaseStudyCarousel from '../components/case-studies-carousel/CaseStudyCarousel';
import { get } from '../service/CaseStudiesService';

const CaseStudies = () => {
  const [pageLoaded, setPageLoaded] = useState(false);
  const [pageData, setPageData] = useState({});
  const [links, setLinks] = useState(<></>);
  const [requestStatus, setRequestStatus] = useState();

  useEffect(() => {
    get(setPageData, setRequestStatus, setPageLoaded);
    if (requestStatus === 'error-404') console.error('Case study with id ${id} could not be found');
  }, []);

  useEffect(() => {
    if (pageData.length > 0) {
      setLinks(
        <div className='links'>
          {pageData.map((item, index) => {
            return <Link to={`/case-study/${item.id}`}>{`${item.title}     `}</Link>;
          })}
        </div>
      );
    }
    console.dir(links)
  }, [pageData]);

  if (pageLoaded)
    return (
      <>
        {links}
        <CaseStudyCarousel />
        <ContactComponent feedbackType='case-study' />
      </>
    );
};

export default CaseStudies;
