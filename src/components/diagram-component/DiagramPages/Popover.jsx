import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import MarkdownComponent from '../../markdown-component/MarkdownComponent';

const Popover = ({ nodeArray, id }) => {
  const [windowWidth, setWindowWidth] = useState();
  const [position, setPosition] = useState('bottom center');
  useEffect(() => {
    if (windowWidth < 767 && (id === 0 || id === 5 || id === 6)) setPosition('bottom left');
    else if (windowWidth < 767 && (id === 2 || id === 3 || id === 8)) setPosition('bottom right');
    else setPosition('bottom center');
  }, [windowWidth]);

  const resizeObserver = new ResizeObserver((entries) => {
    setWindowWidth(entries[0].contentRect.width);
  });

  resizeObserver.observe(document.body);
  const hoverable = nodeArray[id].body === ' ' || nodeArray[id].body === '' ? '' : 'hover';
  return (
    <>
      <Popup trigger={<button className='diagram-popup-button'></button>} position={position} on={hoverable} contentStyle={{ width: '350px' }}>
        <div className='diagram-popup-container'>
          <div className='diagram-popup-title'>
            <u>{nodeArray[id].title}</u>
          </div>
          <div className='diagram-popup-body'>{<MarkdownComponent markdownText={nodeArray[id].body} />}</div>
        </div>
      </Popup>
    </>
  );
};

export default Popover;
