import Titles from './Titles';

const TitleRowThree = ({ totalNum, nodeData, currentNode }) => {
  return (
    <div className='diagram-title-row'>
      <Titles isVisible={true} nodeData={nodeData} currentNode={currentNode} id={7} />
      <Titles isVisible={totalNum > 7 ? true : false} nodeData={nodeData} currentNode={currentNode} id={8} />
      <Titles isVisible={totalNum > 8 ? true : false} nodeData={nodeData} currentNode={currentNode} id={9} />
    </div>
  );
};

export default TitleRowThree;
