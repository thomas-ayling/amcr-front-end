import Titles from './Titles';

const TitleRowOne = ({ currentNode, nodeData }) => {
  return (
    <div className='diagram-title-row'>
      <Titles isVisible={true} nodeData={nodeData} currentNode={currentNode} id={1} />
      <Titles isVisible={true} nodeData={nodeData} currentNode={currentNode} id={2} />
      <Titles isVisible={true} nodeData={nodeData} currentNode={currentNode} id={3} />
    </div>
  );
};

export default TitleRowOne;
