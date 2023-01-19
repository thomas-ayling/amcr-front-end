import Titles from './Titles';

const TitleRowTwo = ({ totalNum, currentNode, nodeArray }) => {
  return (
    <div className='diagram-title-row-reverse'>
      <Titles isVisible={true} nodeArray={nodeArray} currentNode={currentNode} id={3} />
      <Titles isVisible={totalNum > 4 ? true : false} nodeArray={nodeArray} currentNode={currentNode} id={4} />
      <Titles isVisible={totalNum > 5 ? true : false} nodeArray={nodeArray} currentNode={currentNode} id={5} />
    </div>
  );
};

export default TitleRowTwo;
