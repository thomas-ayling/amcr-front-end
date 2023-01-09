import '../../Diagram.css';
import Popover from '../Popover';
import ArrowLeftRight from './ArrowLeftRight';

const RowThree = ({ title, body, currentNode, totalNum }) => {

  return (
    <div className='diagram-grid-item diagram-grid-row'>
      <div className='diagram-row-component'>
        <Popover title={title} body={body} currentNode = {currentNode} id={7}/>
        {totalNum > 7 ? <ArrowLeftRight title={title} body={body} currentNode={currentNode} id={8}/> : ''}
        {totalNum > 8 ? <ArrowLeftRight title={title} body={body} currentNode={currentNode} id={9}/> : ''}
      </div>
    </div>
  );
}

export default RowThree;