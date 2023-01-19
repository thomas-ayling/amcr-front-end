import '../../Diagram.css';
import Popover from '../Popover';
import ArrowLeftRight from './ArrowLeftRight';

const RowOne = ({ currentNode, nodeData }) => {
  return (
    <div className='diagram-grid-item diagram-grid-row'>
      <div className='diagram-row-component'>
        <Popover currentNode={currentNode} nodeData={nodeData} id={1} />
        <ArrowLeftRight />
        <Popover currentNode={currentNode} nodeData={nodeData} id={2} />
        <ArrowLeftRight />
        <Popover currentNode={currentNode} nodeData={nodeData} id={3} />
      </div>
    </div>
  );
};

export default RowOne;
