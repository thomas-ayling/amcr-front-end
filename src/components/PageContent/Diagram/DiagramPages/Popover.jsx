import Popup from 'reactjs-popup';
import { useState, useEffect } from 'react';

export default function Popover(props) {

    return (
        <Popup trigger={<button className='round--btn'></button>} position='top center' on={['hover', 'focus']} contentStyle={{ width: '350px' }}>
        <div className='popup-container'>
          <div className='popup-title'>{props.title}</div>
          <div className='popup-body'>{props.body}</div>
        </div>
      </Popup>
    )

}