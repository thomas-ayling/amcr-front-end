import Popup from 'reactjs-popup';
import { useState, useEffect } from 'react';

import Titles from './Titles';

export default function Popover(props) {

  const hoverable = props.title[props.id] === "" && props.body[props.id] === "" ? "" : "hover";
  const popupPosition = props.id === 4 || props.id === 7 ? "bottom center" : "top center";
    return (
      <>
        <Popup trigger={<button className='round--btn'></button>} position={popupPosition} on={[hoverable]} contentStyle={{ width: '350px' }}>
        <div className='popup-container'>
          <div className='popup-title'><u>{props.title[props.id]}</u></div>
          <div className='popup-body'>{props.body[props.id]}</div>
        </div>
      </Popup>
      </>
    )

}