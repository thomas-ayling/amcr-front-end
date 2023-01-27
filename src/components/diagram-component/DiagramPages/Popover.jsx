import Popup from 'reactjs-popup';
import MarkdownComponent from '../../markdown-component/MarkdownComponent';

const Popover = ({ nodeArray, id }) => {
  const hoverable = nodeArray[id].body === ' ' || nodeArray[id].body === '' ? '' : 'hover';
  return (
    <>
      <Popup trigger={<button className='diagram-popup-button'></button>} position='bottom center' on={hoverable} contentStyle={{ width: '350px' }}>
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
