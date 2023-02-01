import React from 'react';
import { useNavigate } from 'react-router-dom';
import MarkdownComponent from '../markdown-component/MarkdownComponent';

const BodyRows = ({ body }) => {
  const navigate = useNavigate();
  for (const item of body) {
    if (!item.imageId.includes('/')) {
      window.location.reload(false);
      return;
    }
  }
  return body.map((item, index) => (
    <div className={`cssp-body-row cssp-${index % 2 === 0 ? 'regular' : 'reversed'}-row`} key={index}>
      <img className='cssp-body-img' src={item.imageId} alt={item.title} />
      <MarkdownComponent markdownText={item.markdownText} classNames='cssp-body-text' />
    </div>
  ));
};

export default BodyRows;
