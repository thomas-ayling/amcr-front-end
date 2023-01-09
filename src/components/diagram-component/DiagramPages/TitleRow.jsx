import Titles from './Titles';

const TitleRow = ({ title, body, currentNode, currentTitle, currentBody }) => {

  return (
      <div className='diagram-title-row'>
        <Titles title={title} body={body} currentNode = {currentNode}/>
        <Titles title={title} body={body} currentNode = {currentNode} currentTitle={currentTitle} currentBody={currentBody}/>
        <Titles title={title} body={body} currentNode = {currentNode} currentTitle={currentTitle} currentBody={currentBody}/>
      </div>
  );
}

export default TitleRow;