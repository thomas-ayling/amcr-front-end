import '../../Diagram.css';
import Popover from '../Popover';
import ArrowLeftRight from './ArrowLeftRight';

const RowOne = ({ currentNode, nodeArray }) => {
  return (
    <div className='diagram-grid-item diagram-grid-row'>
      <div className='diagram-row-component'>
        <Popover currentNode={currentNode} nodeArray={nodeArray} id={0} />
        <ArrowLeftRight />
        <Popover currentNode={currentNode} nodeArray={nodeArray} id={1} />
        <ArrowLeftRight />
        <Popover currentNode={currentNode} nodeArray={nodeArray} id={2} />
      </div>
    </div>
  );
};

export default RowOne;
