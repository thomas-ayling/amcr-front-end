import '../Diagram.css';
import Popover from './Popover';

const RowOne = ({ title, body, currentNode, currentTitle, currentBody }) => {

  const arrowLR = (
    <>
      <div className='diagram-arrow-line' />
      <div className='diagram-arrow-lr-triangle' />
    </>
  );

  return (
    <div className='diagram-grid-item diagram-grid-row'>
      <div className='diagram-row-component'>
        <Popover title={title} body={body} currentNode = {currentNode} id={1}/>
        {arrowLR}
        <Popover title={title} body={body} currentNode = {currentNode} currentTitle={currentTitle} currentBody={currentBody} id={2}/>
        {arrowLR}
        <Popover title={title} body={body} currentNode = {currentNode} currentTitle={currentTitle} currentBody={currentBody} id={3}/>
      </div>
    </div>
  );
}

export default RowOne;