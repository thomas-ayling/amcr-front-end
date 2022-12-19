import '../Diagram.css';
import Popover from './Popover';

const RowThree = (props) => {
  const arrowLR8 = (
    <>
      <div className='diagram-arrow-line' />
      <div className='diagram-arrow-lr-triangle' />
      <Popover title={props.title} body={props.body} currentNode = {props.currentNode} id={8}/>
    </>
  );

  const arrowLR9 = (
    <>
      <div className='diagram-arrow-line' />
      <div className='diagram-arrow-lr-triangle' />
      <Popover title={props.title} body={props.body} currentNode = {props.currentNode} id={9}/>
    </>
  );

  return (
    <div className='diagram-grid-item diagram-grid-row'>
      <div className='diagram-row-component'>
        <Popover title={props.title} body={props.body} currentNode = {props.currentNode} id={7}/>
        {props.totalNum > 7 ? arrowLR8 : ''}
        {props.totalNum > 8 ? arrowLR9 : ''}
      </div>
    </div>
  );
}

export default RowThree;