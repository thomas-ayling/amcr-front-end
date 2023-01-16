import TitleRowOne from './TitleRowOne';
import TitleRowTwo from './TitleRowTwo';
import TitleRowThree from './TitleRowThree';
import Empty from '../Empty';

const TitleGrid = ({ totalNum, currentNode, title, body }) => {
  const gridStyle = {
    gridTemplateRows: totalNum < 4 ? '200px 0px 0px' : totalNum < 7 ? '200px 200px 0px' : '200px 200px 200px',
    marginTop: totalNum < 4 ? '-240px' : totalNum < 7 ? '-440px' : '-640px',
  };

  return (
    <div className='diagram-grid-component'>
      <div className='diagram-title-grid' style={gridStyle}>
        <TitleRowOne title={title} body={body} currentNode={currentNode} />
        {totalNum > 3 ? <TitleRowTwo totalNum={totalNum} title={title} body={body} currentNode={currentNode} /> : <Empty />}
        {totalNum > 6 ? <TitleRowThree totalNum={totalNum} title={title} body={body} currentNode={currentNode} /> : <Empty />}
      </div>
    </div>
  );
};

export default TitleGrid;
