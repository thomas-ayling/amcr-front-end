import Titles from './Titles';

const TitleRow = (props) => {

  return (
      <div className='diagram-title-row'>
        <Titles title={props.title} body={props.body} currentNode = {props.currentNode}/>
        <Titles title={props.title} body={props.body} currentNode = {props.currentNode} currentTitle={props.currentTitle} currentBody={props.currentBody}/>
        <Titles title={props.title} body={props.body} currentNode = {props.currentNode} currentTitle={props.currentTitle} currentBody={props.currentBody}/>
      </div>
  );
}

export default TitleRow;