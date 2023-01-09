
import '../Diagram.css';
import Popover from './Popover';

const RowTwo = (props) => {
  const arrowRL5 = (
    <>
      <div className='diagram-arrow-line' />
      <div className='diagram-arrow-rl-triangle' />
      <Popover title={props.title} body={props.body} currentNode = {props.currentNode} id ={5}/>
    </>
  );

  const arrowRL6 = (
    <>
      <div className='diagram-arrow-line' />
      <div className='diagram-arrow-rl-triangle' />
      <Popover title={props.title} body={props.body} currentNode = {props.currentNode} id ={6}/>
    </>
  );

  return (
    <div className='diagram-grid-item diagram-grid-row-reverse'>
      <div className='diagram-reverse-row-component'>
        <Popover title={props.title} body={props.body} currentNode = {props.currentNode} id={4}/>
        {props.totalNum > 4 ? arrowRL5 : ''}
        {props.totalNum > 5 ? arrowRL6 : ''}
      </div>
    </div>
  );
}

export default RowTwo;