import { useState } from 'react';
import '../Diagram.css';
import Popover from './Popover';

export default function RowOne(props) {

  const arrowLR = (
    <>
      <div className='arrow--line' />
      <div className='triangle--lr' />
    </>
  );

  return (
    <div className='grid--item grid--row'>
      <div className='row--component'>
        <Popover title={props.title} body={props.body} currentNode = {props.currentNode} id={1}/>
        {arrowLR}
        <Popover title={props.title} body={props.body} currentNode = {props.currentNode} id={2}/>
        {arrowLR}
        <Popover title={props.title} body={props.body} currentNode = {props.currentNode} id={3}/>
      </div>
    </div>
  );
}
