import Titles from './Titles';

const TitleRowOne = (props) => {

  return (
      <div className='diagram-title-row'>
        <Titles title={props.title} body={props.body} currentNode = {props.currentNode} id={1}/>
        <Titles title={props.title} body={props.body} currentNode = {props.currentNode} currentTitle={props.currentTitle} currentBody={props.currentBody} id={2}/>
        <Titles title={props.title} body={props.body} currentNode = {props.currentNode} currentTitle={props.currentTitle} currentBody={props.currentBody} id={3}/>
      </div>
  );
}

export default TitleRowOne;