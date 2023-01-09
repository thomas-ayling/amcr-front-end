import '../Diagram.css';
import Popover from './Popover';

const RowOne = (props) => {

  const arrowLR = (
    <>
      <div className='diagram-arrow-line' />
      <div className='diagram-arrow-lr-triangle' />
    </>
  );

  return (
    <div className='diagram-grid-item diagram-grid-row'>
      <div className='diagram-row-component'>
        <Popover title={props.title} body={props.body} currentNode = {props.currentNode} id={1}/>
        {arrowLR}
        <Popover title={props.title} body={props.body} currentNode = {props.currentNode} currentTitle={props.currentTitle} currentBody={props.currentBody} id={2}/>
        {arrowLR}
        <Popover title={props.title} body={props.body} currentNode = {props.currentNode} currentTitle={props.currentTitle} currentBody={props.currentBody} id={3}/>
      </div>
    </div>
  );
}

export default RowOne;
