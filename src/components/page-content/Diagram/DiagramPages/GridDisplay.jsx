import Grid from './Grid';
import TitleGrid from './TitleGrid';

const GridDisplay = ({ totalNum, currentNode, title, body }) => {
  return (
    <div>
      <Grid totalNum={totalNum} currentNode={currentNode} title={title} body={body} />
      <TitleGrid totalNum={totalNum} currentNode={currentNode} title={title} body={body} />
    </div>
  );
};

export default GridDisplay;
