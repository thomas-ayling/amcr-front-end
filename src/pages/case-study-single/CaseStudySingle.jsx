import { React } from 'react';
import { useParams } from 'react-router-dom';
import Headline from '../../components/case-study-single/Headline';
import Explanation from '../../components/case-study-single/Explanation';
import ContactComponent from '../../components/contact-component/ContactComponent';
import { getCaseStudyData } from '../../service/CaseStudySingleMockService';

export const CaseStudySingle = () => {
  const { id } = useParams();
  const data = getCaseStudyData(1);
  return (
    <div className='case-study-single-page'>
      <Headline headline={data.headline} />
      <Explanation explanation={data.explanation} />
      <ContactComponent feedbackType='case-study' />
    </div>
  );
};
