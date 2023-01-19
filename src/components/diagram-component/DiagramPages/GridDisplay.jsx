import Grid from './Grid';
import TitleGrid from './TitlePages/TitleGrid';

const GridDisplay = ({ totalNum, currentNode, nodeData }) => {
  return (
    <div>
      <Grid totalNum={totalNum} currentNode={currentNode} nodeData={nodeData} />
      <TitleGrid totalNum={totalNum} currentNode={currentNode} nodeData={nodeData} />
    </div>
  );
};

export default GridDisplay;
