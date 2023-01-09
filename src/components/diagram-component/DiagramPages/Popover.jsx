import Popup from 'reactjs-popup';

const Popover = (props) => {

  const hoverable = props.body[props.id] === " "|| props.body[props.id] === "" ? "" : "hover";
    return (
      <>
        <Popup trigger={<button className='diagram-popup-button'></button>} position='bottom center' on={hoverable} contentStyle={{ width: '350px' }}>
        <div className='diagram-popup-container'>
          <div className='diagram-popup-title'><u>{props.title[props.id]}</u></div>
          <div className='diagram-popup-body'>{props.body[props.id]}</div>
        </div>
      </Popup>
      </>
    )
}

export default Popover;