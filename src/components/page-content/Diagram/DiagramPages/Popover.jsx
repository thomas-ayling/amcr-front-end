import Popup from 'reactjs-popup';

const Popover = ({ title, body, id }) => {

  const hoverable = body[id] === " "|| body[id] === "" ? "" : "hover";
    return (
      <>
        <Popup trigger={<button className='diagram-popup-button'></button>} position='bottom center' on={hoverable} contentStyle={{ width: '350px' }}>
        <div className='diagram-popup-container'>
          <div className='diagram-popup-title'><u>{title[id]}</u></div>
          <div className='diagram-popup-body'>{body[id]}</div>
        </div>
      </Popup>
      </>
    )
}

export default Popover;