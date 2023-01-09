import Titles from './Titles';

const TitleRowThree = (props) => {

  return (
      <div className='diagram-title-row'>
        <Titles title={props.title} body={props.body} currentNode = {props.currentNode} id={7}/>
        <Titles title={props.title} body={props.body} currentNode = {props.currentNode} currentTitle={props.currentTitle} currentBody={props.currentBody} id={8}/>
        <Titles title={props.title} body={props.body} currentNode = {props.currentNode} currentTitle={props.currentTitle} currentBody={props.currentBody} id={9}/>
      </div>
  );
}

export default TitleRowThree;