import Titles from './Titles';

const TitleRowTwo = (props) => {

  return (
      <div className='diagram-title-row-reverse'>
        <Titles title={props.title} body={props.body} currentNode = {props.currentNode} id={4}/>
        <Titles title={props.title} body={props.body} currentNode = {props.currentNode} currentTitle={props.currentTitle} currentBody={props.currentBody} id={5}/>
        <Titles title={props.title} body={props.body} currentNode = {props.currentNode} currentTitle={props.currentTitle} currentBody={props.currentBody} id={6}/>
      </div>
  );
}

export default TitleRowTwo;