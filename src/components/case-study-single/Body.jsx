import React from 'react';
import Title from './Title';
import BodyRows from './BodyRows';
import StyledHr from '../shared-components/StyledHr'

const Body = ({ pageData }) => {
  return (
    <>
      <div className='cssp-body-wrapper'>
        <div className='cssp-body'>
          <Title text={pageData.title} />
          <StyledHr className='cssp-hr' />
          <BodyRows data={pageData.body} />
        </div>
      </div>
    </>
  );
};

export default Body;
