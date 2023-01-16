import Titles from './Titles';

const TitleRowThree = ({ totalNum, title, body, currentNode, currentTitle, currentBody }) => {
  return (
    <div className='diagram-title-row'>
      <Titles title={title} body={body} currentNode={currentNode} id={7} />
      <Titles title={totalNum > 7 ? title : ''} body={body} currentNode={currentNode} currentTitle={currentTitle} currentBody={currentBody} id={8} />
      <Titles title={totalNum > 8 ? title : ''} body={body} currentNode={currentNode} currentTitle={currentTitle} currentBody={currentBody} id={9} />
    </div>
  );
};

export default TitleRowThree;
