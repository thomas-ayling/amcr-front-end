import Popup from 'reactjs-popup';
import { useState, useEffect } from 'react';

import Popover from './Popover';
import RowOne from './RowOne';
import RowTwo from './RowTwo';
import RowThree from './RowThree';
import Empty from './Empty'

const Grid = (props) => {

  // useEffect(() => {
  //   setOutput((prevOutput) => ({
  //     ...prevOutput,
  //     [props.currentNode]: {
  //       title: props.title,
  //       body: props.body,
  //     },
  //   }));
  //   console.log(output);
  // }, [props.title, props.body]);

  // useEffect(() => {
  //   console.dir(output);
  //   setOutput((prevOutput) => ({
  //     ...prevOutput,
  //     [props.currentNode]: {
  //       title: props.title,
  //       body: props.body,
  //     },
  //   }));
  // }, [props.title, props.body]);

  // const markdownStyles = {
  //   backgroundColor: input !== '' ? 'rgb(249, 249, 249)' : 'transparent',
  //   padding: input !== '' ? '15px' : '0px',
  //   border: input !== '' ? '1px solid #f37037' : 'none'
  // };

  const gridStyle = {
    gridTemplateRows: props.totalNum < 4 ? '200px 0px 0px' : props.totalNum < 7 ? '200px 200px 0px' : '200px 200px 200px'
  };

  return (
    <div className='diagram-grid-component'>
      <div className='diagram-grid-container' style={gridStyle}>
        <Empty/>
        <RowOne title={props.title} body={props.body} currentNode = {props.currentNode}/>
        {props.totalNum > 3 ? <div className='diagram-grid-item diagram-grid-lr-arrow-top'></div> : <Empty/>}
        {props.totalNum > 6 ? <div className='diagram-grid-item diagram-grid-rl-arrow-top'></div> : <Empty/>}
        {props.totalNum > 3 ? <RowTwo totalNum={props.totalNum} title={props.title} body={props.body} currentNode = {props.currentNode}/> : <Empty/>}
        {props.totalNum > 3 ? <div className='diagram-grid-item diagram-grid-lr-arrow-bottom'></div> : <Empty/>}
        {props.totalNum > 6 ? <div className='diagram-grid-item diagram-grid-rl-arrow-bottom'></div> : <Empty/>}
        {props.totalNum > 6 ? <RowThree totalNum={props.totalNum} title={props.title} body ={props.body} currentNode = {props.currentNode}/> : <Empty/>}
        <Empty/>
      </div>
      <button className='submit--button'>Confirm Changes</button>
    </div>
  );

// {Array(Number(props.totalNumber))
//   .fill()
//   .map((_, i) => (
//     <Popover key={i} />
//   ))}

// return (
//   <div className='diagram-grid-component'>
//     <div className='diagram-grid-container'>
//       {empty}
//       {<div className='diagram-grid-item grid--row'>{row}</div>}
//       <div className='diagram-grid-item diagram-grid-lr-arrow-top'></div>
//       <div className='diagram-grid-item diagram-grid-rl-arrow-top'></div>
//       <div className='diagram-grid-item grid--row-rev'>{reverseRow}</div>
//       <div className='diagram-grid-item diagram-grid-lr-arrow-bottom'></div>
//       <div className='diagram-grid-item diagram-grid-rl-arrow-bottom'></div>
//       <div className='diagram-grid-item grid--row'>{row}</div>
//       {empty}
//     </div>
//     <button className='submit--button'>Confirm Changes</button>
//   </div>
// );
export default Grid;