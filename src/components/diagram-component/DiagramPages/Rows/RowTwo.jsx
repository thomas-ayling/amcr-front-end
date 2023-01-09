
import '../../Diagram.css';
import Popover from '../Popover';
import ArrowRightLeft from './ArrowRightLeft';

const RowTwo = ({ title, body, currentNode, totalNum }) => {

  return (
    <div className='diagram-grid-item diagram-grid-row-reverse'>
      <div className='diagram-reverse-row-component'>
        <Popover title={title} body={body} currentNode = {currentNode} id={4}/>
        {totalNum > 4 ? <ArrowRightLeft title={title} body={body} currentNode = {currentNode} id={5}/> : ''}
        {totalNum > 5 ? <ArrowRightLeft title={title} body={body} currentNode = {currentNode} id={6}/> : ''}
      </div>
    </div>
  );
}

export default RowTwo;