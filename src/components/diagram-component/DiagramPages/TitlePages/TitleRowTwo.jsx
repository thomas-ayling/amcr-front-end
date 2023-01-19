import Titles from './Titles';

const TitleRowTwo = ({ totalNum, currentNode, nodeData }) => {
  return (
    <div className='diagram-title-row-reverse'>
      <Titles isVisible={true} nodeData={nodeData} currentNode={currentNode} id={4} />
      <Titles isVisible={totalNum > 4 ? true : false} nodeData={nodeData} currentNode={currentNode} id={5} />
      <Titles isVisible={totalNum > 5 ? true : false} nodeData={nodeData} currentNode={currentNode} id={6} />
    </div>
  );
};

export default TitleRowTwo;
