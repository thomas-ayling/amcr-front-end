import Titles from './Titles';

const TitleRowOne = ({ currentNode, nodeArray }) => {
  return (
    <div className='diagram-title-row'>
      <Titles isVisible={true} nodeArray={nodeArray} currentNode={currentNode} id={0} />
      <Titles isVisible={true} nodeArray={nodeArray} currentNode={currentNode} id={1} />
      <Titles isVisible={true} nodeArray={nodeArray} currentNode={currentNode} id={2} />
    </div>
  );
};

export default TitleRowOne;
