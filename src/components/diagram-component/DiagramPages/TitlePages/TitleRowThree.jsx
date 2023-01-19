import Titles from './Titles';

const TitleRowThree = ({ totalNum, currentNode, nodeArray }) => {
  return (
    <div className='diagram-title-row'>
      <Titles isVisible={true} nodeArray={nodeArray} currentNode={currentNode} id={6} />
      <Titles isVisible={totalNum > 7 ? true : false} nodeArray={nodeArray} currentNode={currentNode} id={7} />
      <Titles isVisible={totalNum > 8 ? true : false} nodeArray={nodeArray} currentNode={currentNode} id={8} />
    </div>
  );
};

export default TitleRowThree;
