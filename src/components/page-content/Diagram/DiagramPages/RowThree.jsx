import '../Diagram.css';
import Popover from './Popover';

export default function RowThree(props) {
  const arrowLR8 = (
    <>
      <div className='arrow--line' />
      <div className='triangle--lr' />
      <Popover title={props.title} body={props.body} currentNode = {props.currentNode} id={8}/>
    </>
  );

  const arrowLR9 = (
    <>
      <div className='arrow--line' />
      <div className='triangle--lr' />
      <Popover title={props.title} body={props.body} currentNode = {props.currentNode} id={9}/>
    </>
  );

  return (
    <div className='grid--item grid--row'>
      <div className='row--component'>
        <Popover title={props.title} body={props.body} currentNode = {props.currentNode} id={7}/>
        {props.totalNum > 7 ? arrowLR8 : ''}
        {props.totalNum > 8 ? arrowLR9 : ''}
      </div>
    </div>
  );
}