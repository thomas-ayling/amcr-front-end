import '../../Diagram.css';
import Popover from '../Popover';
import ArrowLeftRight from './ArrowLeftRight';

const RowOne = ({ title, body, currentNode, currentTitle, currentBody }) => {
  return (
    <div className='diagram-grid-item diagram-grid-row'>
      <div className='diagram-row-component'>
        <Popover title={title} body={body} currentNode={currentNode} id={1} />
        <ArrowLeftRight />
        <Popover title={title} body={body} currentNode={currentNode} currentTitle={currentTitle} currentBody={currentBody} id={2} />
        <ArrowLeftRight />
        <Popover title={title} body={body} currentNode={currentNode} currentTitle={currentTitle} currentBody={currentBody} id={3} />
      </div>
    </div>
  );
};

export default RowOne;
