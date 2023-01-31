import React from 'react';
import MarkdownComponent from '../markdown-component/MarkdownComponent';

const BodyRows = ({ body }) => {
  return body.map((item, index) => (
    <div className={`cssp-body-row cssp-${index % 2 === 0 ? 'regular' : 'reversed'}-row`} key={index}>
      <img className='cssp-body-img' src={item.imageId} alt={item.title} />
      <MarkdownComponent markdownText={item.markdownText} classNames='cssp-body-text' />
    </div>
  ));
};

export default BodyRows;
