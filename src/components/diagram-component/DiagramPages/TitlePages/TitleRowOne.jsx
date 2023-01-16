import Titles from './Titles';

const TitleRowOne = ({ title, body, currentNode, currentTitle, currentBody }) => {
  return (
    <div className='diagram-title-row'>
      <Titles title={title} body={body} currentNode={currentNode} id={1} />
      <Titles title={title} body={body} currentNode={currentNode} currentTitle={currentTitle} currentBody={currentBody} id={2} />
      <Titles title={title} body={body} currentNode={currentNode} currentTitle={currentTitle} currentBody={currentBody} id={3} />
    </div>
  );
};

export default TitleRowOne;
