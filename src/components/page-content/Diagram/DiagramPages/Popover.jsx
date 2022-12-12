import Popup from 'reactjs-popup';
import { useState, useEffect } from 'react';

export default function Popover(props) {
  const [currentTitle, setCurrentTitle] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: ""
  });
  const [currentBody, setCurrentBody] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: ""
  });

  useEffect(() => {
    setCurrentTitle((prevTitle) => ({...prevTitle, [props.currentNode]: props.title}));
}, [props.title]);

useEffect(() => {
  setCurrentBody((prevBody) => ({...prevBody, [props.currentNode]: props.body}));
}, [props.body]);

// useEffect(() => {
// }, [props.currentNode]);

    return (
        <Popup trigger={<button className='round--btn'></button>} position='top center' on={['hover', 'focus']} contentStyle={{ width: '350px' }}>
        <div className='popup-container'>
          <div className='popup-title'>{currentTitle[props.id]}</div>
          <div className='popup-body'>{currentBody[props.id]}</div>
        </div>
      </Popup>
    )

}