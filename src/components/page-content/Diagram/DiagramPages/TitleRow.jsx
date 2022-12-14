import Titles from './Titles';

export default function TitleRow(props) {

  return (
    <div className='grid--item title--row'>
      <div className='row--component'>
        <Titles title={props.title} body={props.body} currentNode = {props.currentNode} id={1}/>
        <Titles title={props.title} body={props.body} currentNode = {props.currentNode} currentTitle={props.currentTitle} currentBody={props.currentBody} id={2}/>
        <Titles title={props.title} body={props.body} currentNode = {props.currentNode} currentTitle={props.currentTitle} currentBody={props.currentBody} id={3}/>
      </div>
    </div>
  );
}