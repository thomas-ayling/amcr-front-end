import Popup from 'reactjs-popup';

const Popover = ({ nodeData, id }) => {
  const hoverable = nodeData[id].body === ' ' || nodeData[id].body === '' ? '' : 'hover';
  return (
    <>
      <Popup trigger={<button className='diagram-popup-button'></button>} position='bottom center' on={hoverable} contentStyle={{ width: '350px' }}>
        <div className='diagram-popup-container'>
          <div className='diagram-popup-title'>
            <u>{nodeData[id].title}</u>
          </div>
          <div className='diagram-popup-body'>{nodeData[id].body}</div>
        </div>
      </Popup>
    </>
  );
};

export default Popover;
