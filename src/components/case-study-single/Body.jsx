import React from 'react';
import Title from './Title';
import BodyRows from './BodyRows';
// import StyledHr from '../shared-components/StyledHr'
import { StyledHr } from '../../styles/styles';

const Body = ({ data, title }) => {
  return (
    <>
      <div className='cssp-body-wrapper'>
        <div className='cssp-body'>
          <Title text={title} />
          <StyledHr className='cssp-hr' />
          <BodyRows data={data} />
        </div>
      </div>
    </>
  );
};

export default Body;
