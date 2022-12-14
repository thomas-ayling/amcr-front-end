import RowOne from './RowOne';
import TitleRow from './TitleRow';
import RowTwo from './RowTwo';
import RowThree from './RowThree';
import Empty from './Empty'

export default function TitleGrid(props) {

  
    const gridStyle = {
      gridTemplateRows: props.totalNum < 4 ? '200px 0px 0px' : props.totalNum < 7 ? '200px 200px 0px' : '200px 200px 200px',
      border: '2px solid black'
    };
  
    return (
      <div className='grid--component'>
        <div className='title--grid' style={gridStyle}>
          <Empty/>
          <TitleRow title={props.title} body={props.body} currentNode = {props.currentNode}/>
          <Empty/>
          <Empty/>
          {props.totalNum > 3 ? <RowTwo totalNum={props.totalNum} title={props.title} body={props.body} currentNode = {props.currentNode}/> : <Empty/>}
          <Empty/>
          <Empty/>
          {props.totalNum > 6 ? <TitleRow totalNum={props.totalNum} title={props.title} body ={props.body} currentNode = {props.currentNode}/> : <Empty/>}
          <Empty/>
        </div>
      </div>
    );
  }