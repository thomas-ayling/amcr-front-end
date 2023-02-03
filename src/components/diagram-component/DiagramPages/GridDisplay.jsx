import Grid from './Grid';
import TitleGrid from './TitlePages/TitleGrid';

const GridDisplay = ({ totalNum, currentNode, nodeArray }) => {
  return (
    <div>
      <Grid totalNum={totalNum} currentNode={currentNode} nodeArray={nodeArray} />
      <TitleGrid totalNum={totalNum} currentNode={currentNode} nodeArray={nodeArray} />
    </div>
  );
};

export default GridDisplay;
