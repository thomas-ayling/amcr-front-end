import TitleRowOne from './TitleRowOne';
import TitleRowTwo from './TitleRowTwo';
import TitleRowThree from './TitleRowThree';
import Empty from './Empty';

const TitleGrid = (props) => {
  const gridStyle = {
    gridTemplateRows: props.totalNum < 4 ? '200px 0px 0px' : props.totalNum < 7 ? '200px 200px 0px' : '200px 200px 200px',
    marginTop: props.totalNum < 4 ? '-240px' : props.totalNum < 7 ? '-440px' : '-640px'
  };

  return (
    <div className='diagram-grid-component'>
      <div className='diagram-title-grid' style={gridStyle}>
        <TitleRowOne title={props.title} body={props.body} currentNode={props.currentNode} />
        {props.totalNum > 3 ? <TitleRowTwo totalNum={props.totalNum} title={props.title} body={props.body} currentNode={props.currentNode} /> : <Empty />}
        {props.totalNum > 6 ? <TitleRowThree totalNum={props.totalNum} title={props.title} body={props.body} currentNode={props.currentNode} /> : <Empty />}
      </div>
    </div>
  );
};

export default TitleGrid;
