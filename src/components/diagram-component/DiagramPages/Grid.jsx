import RowOne from './Rows/RowOne';
import RowTwo from './Rows/RowTwo';
import RowThree from './Rows/RowThree';
import Empty from './Empty';

const Grid = ({ totalNum, currentNode, nodeData }) => {
  const gridStyle = {
    gridTemplateRows: totalNum < 4 ? '200px 0px 0px' : totalNum < 7 ? '200px 200px 0px' : '200px 200px 200px',
  };

  return (
    <div className='diagram-grid-component'>
      <div className='diagram-grid-container' style={gridStyle}>
        <Empty />
        <RowOne currentNode={currentNode} nodeData={nodeData} />
        {totalNum > 3 ? <div className='diagram-grid-item diagram-grid-lr-arrow-top'></div> : <Empty />}
        {totalNum > 6 ? <div className='diagram-grid-item diagram-grid-rl-arrow-top'></div> : <Empty />}
        {totalNum > 3 ? <RowTwo totalNum={totalNum} currentNode={currentNode} nodeData={nodeData} /> : <Empty />}
        {totalNum > 3 ? <div className='diagram-grid-item diagram-grid-lr-arrow-bottom'></div> : <Empty />}
        {totalNum > 6 ? <div className='diagram-grid-item diagram-grid-rl-arrow-bottom'></div> : <Empty />}
        {totalNum > 6 ? <RowThree totalNum={totalNum} currentNode={currentNode} nodeData={nodeData} /> : <Empty />}
        <Empty />
      </div>
    </div>
  );
};

export default Grid;
