import Popup from 'reactjs-popup';
import { useState, useEffect } from 'react';

import Popover from './Popover';

export default function Grid(props) {
  const [output, setOutput] = useState({
    1: {
      title: '',
      body: '',
    },
    2: {
      title: '',
      body: '',
    },
    3: {
      title: '',
      body: '',
    },
    4: {
      title: '',
      body: '',
    },
    5: {
      title: '',
      body: '',
    },
    6: {
      title: '',
      body: '',
    },
    7: {
      title: '',
      body: '',
    },
    8: {
      title: '',
      body: '',
    },
    9: {
      title: '',
      body: '',
    },
  });

  useEffect(() => {
    setOutput((prevOutput) => ({
      ...prevOutput,
      [props.currentNode]: {
        title: props.title,
        body: props.body,
      },
    }));
    console.log(output);
  }, [props.title, props.body]);

  useEffect(() => {
    console.dir(output);
    setOutput((prevOutput) => ({
      ...prevOutput,
      [props.currentNode]: {
        title: props.title,
        body: props.body,
      },
    }));
  }, [props.title, props.body]);

  switch (props.number) {
    case 4:
      //case 4
      break;
    case 5:
      //case 5
      break;
    case 6:
      //case 6
      break;
    case 7:
      //case 7
      break;
    case 8:
      //case 8
      break;
    case 9:
      //case 9
      break;
    default:
    //default code
  }

  //   useEffect(() => {
  //   }, []);

  const nope = '';
  const popupItem = (
    <Popup trigger={<button className='round--btn'></button>} position='top center' on={['hover', 'focus']} contentStyle={{ width: '350px' }}>
      <div className='popup-container'>
        <div className='popup-title'>{props.title}</div>
        <div className='popup-body'>{props.body}</div>
      </div>
    </Popup>
  );

  const arrowLR = (
    <>
      <div className='arrow--line' />
      <div className='triangle--lr' />
    </>
  );

  const arrowRL = (
    <>
      <div className='arrow--line' />
      <div className='triangle--rl' />
    </>
  );
    //RowOne, RowTwo, RowThree
  const row = (
    <div className='row--component'>
      <Popover title={props.title} body={props.body}/>
      {arrowLR}
      <Popover />
      {arrowLR}
      <Popover />
    </div>
  );

  const reverseRow = (
    <div className='reverse--row--component'>
      <Popover />
      {arrowRL}
      <Popover />
      {arrowRL}
      <Popover />
    </div>
  );

  const empty = <div className='grid--item grid--empty'></div>;

  return (
    <div className='grid--component'>
      <div className='grid--container'>
        {empty}
        {<div className='grid--item grid--row'>{row}</div>}
        <div className='grid--item grid--ta-lr'></div>
        <div className='grid--item grid--ta-rl'></div>
        <div className='grid--item grid--row-rev'>{reverseRow}</div>
        <div className='grid--item grid--ba-lr'></div>
        <div className='grid--item grid--ba-rl'></div>
        <div className='grid--item grid--row'>{row}</div>
        {empty}
      </div>
      <button className='submit--button'>Confirm Changes</button>
    </div>
  );
}
