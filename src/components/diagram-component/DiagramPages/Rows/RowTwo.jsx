import '../../Diagram.css';
import Popover from '../Popover';
import ArrowRightLeft from './ArrowRightLeft';

const RowTwo = ({ currentNode, totalNum, nodeArray }) => {
  return (
    <div className='diagram-grid-item diagram-grid-row-reverse'>
      <div className='diagram-reverse-row-component'>
        <Popover currentNode={currentNode} nodeArray={nodeArray} id={3} />
        {totalNum > 4 ? <ArrowRightLeft currentNode={currentNode} nodeArray={nodeArray} id={4} /> : ''}
        {totalNum > 5 ? <ArrowRightLeft currentNode={currentNode} nodeArray={nodeArray} id={5} /> : ''}
      </div>
    </div>
  );
};

export default RowTwo;
