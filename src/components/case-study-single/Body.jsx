import React from 'react';
import Title from './Title';
import BodyRows from './BodyRows';
import DownloadLinks from './DownloadLinks';
import { StyledHr } from '../../styles/styles';

const Body = ({ body, title, attachmentMetadata }) => {
  return (
    <>
      <div className='cssp-body-wrapper'>
        <div className='cssp-body'>
          <Title text={title} />
          <StyledHr className='cssp-hr' />
          <BodyRows body={body} />
          <DownloadLinks attachmentMetadata={attachmentMetadata} />
        </div>
      </div>
    </>
  );
};

export default Body;
