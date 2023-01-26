import '../../Diagram.css';
import Popover from '../Popover';
import ArrowLeftRight from './ArrowLeftRight';

const RowThree = ({ currentNode, totalNum, nodeArray }) => {
  return (
    <div className='diagram-grid-item diagram-grid-row'>
      <div className='diagram-row-component'>
        <Popover nodeArray={nodeArray} currentNode={currentNode} id={6} />
        {totalNum > 7 ? <ArrowLeftRight nodeArray={nodeArray} currentNode={currentNode} id={7} /> : ''}
        {totalNum > 8 ? <ArrowLeftRight nodeArray={nodeArray} currentNode={currentNode} id={8} /> : ''}
      </div>
    </div>
  );
};

export default RowThree;
