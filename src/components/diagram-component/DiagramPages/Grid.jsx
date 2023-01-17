import RowOne from './Rows/RowOne';
import RowTwo from './Rows/RowTwo';
import RowThree from './Rows/RowThree';
import Empty from './Empty';

const Grid = ({ totalNum, currentNode, title, body }) => {
  const gridStyle = {
    gridTemplateRows: totalNum < 4 ? '200px 0px 0px' : totalNum < 7 ? '200px 200px 0px' : '200px 200px 200px',
  };

  return (
    <div className='diagram-grid-component'>
      <div className='diagram-grid-container' style={gridStyle}>
        <Empty />
        <RowOne title={title} body={body} currentNode={currentNode} />
        {totalNum > 3 ? <div className='diagram-grid-item diagram-grid-lr-arrow-top'></div> : <Empty />}
        {totalNum > 6 ? <div className='diagram-grid-item diagram-grid-rl-arrow-top'></div> : <Empty />}
        {totalNum > 3 ? <RowTwo totalNum={totalNum} title={title} body={body} currentNode={currentNode} /> : <Empty />}
        {totalNum > 3 ? <div className='diagram-grid-item diagram-grid-lr-arrow-bottom'></div> : <Empty />}
        {totalNum > 6 ? <div className='diagram-grid-item diagram-grid-rl-arrow-bottom'></div> : <Empty />}
        {totalNum > 6 ? <RowThree totalNum={totalNum} title={title} body={body} currentNode={currentNode} /> : <Empty />}
        <Empty />
      </div>
    </div>
  );
};

export default Grid;
