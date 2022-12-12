import '../Diagram.css';
import Popover from './Popover';

export default function RowTwo(props) {
  const arrowRL5 = (
    <>
      <div className='arrow--line' />
      <div className='triangle--rl' />
      <Popover title={props.title} body={props.body} currentNode = {props.currentNode} id ={5}/>
    </>
  );

  const arrowRL6 = (
    <>
      <div className='arrow--line' />
      <div className='triangle--rl' />
      <Popover title={props.title} body={props.body} currentNode = {props.currentNode} id ={6}/>
    </>
  );

  return (
    <div className='grid--item grid--row-rev'>
      <div className='reverse--row--component'>
        <Popover title={props.title} body={props.body} currentNode = {props.currentNode} id={4}/>
        {props.totalNum > 4 ? arrowRL5 : ''}
        {props.totalNum > 5 ? arrowRL6 : ''}
      </div>
    </div>
  );
}
