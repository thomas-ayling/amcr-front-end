import '../../Diagram.css';
import Popover from '../Popover';
import ArrowRightLeft from './ArrowRightLeft';

const RowTwo = ({ currentNode, totalNum, nodeData }) => {
  return (
    <div className='diagram-grid-item diagram-grid-row-reverse'>
      <div className='diagram-reverse-row-component'>
        <Popover currentNode={currentNode} nodeData={nodeData} id={4} />
        {totalNum > 4 ? <ArrowRightLeft currentNode={currentNode} nodeData={nodeData} id={5} /> : ''}
        {totalNum > 5 ? <ArrowRightLeft currentNode={currentNode} nodeData={nodeData} id={6} /> : ''}
      </div>
    </div>
  );
};

export default RowTwo;
