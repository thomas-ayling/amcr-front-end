import Titles from './Titles';

const TitleRowTwo = ({ totalNum, title, body, currentNode, currentTitle, currentBody }) => {
  return (
    <div className='diagram-title-row-reverse'>
      <Titles title={title} body={body} currentNode={currentNode} id={4} />
      <Titles title={totalNum > 4 ? title : ''} body={body} currentNode={currentNode} currentTitle={currentTitle} currentBody={currentBody} id={5} />
      <Titles title={totalNum > 5 ? title : ''} body={body} currentNode={currentNode} currentTitle={currentTitle} currentBody={currentBody} id={6} />
    </div>
  );
};

export default TitleRowTwo;
