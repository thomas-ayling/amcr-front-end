import '../../Diagram.css';
import Popover from '../Popover';
import ArrowLeftRight from './ArrowLeftRight';

const RowThree = ({ currentNode, nodeData, totalNum }) => {
  return (
    <div className='diagram-grid-item diagram-grid-row'>
      <div className='diagram-row-component'>
        <Popover currentNode={currentNode} nodeData={nodeData} id={7} />
        {totalNum > 7 ? <ArrowLeftRight currentNode={currentNode} nodeData={nodeData} id={8} /> : ''}
        {totalNum > 8 ? <ArrowLeftRight currentNode={currentNode} nodeData={nodeData} id={9} /> : ''}
      </div>
    </div>
  );
};

export default RowThree;
