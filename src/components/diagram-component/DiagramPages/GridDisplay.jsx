import Grid from "./Grid";
import TitleGrid from "./TitleGrid";

const GridDisplay = (props) => {
    return (
    <div className="diagram-display-grid">
    <Grid totalNum={props.totalNum} currentNode={props.currentNode} title={props.title} body={props.body}/>
    <TitleGrid totalNum={props.totalNum} currentNode={props.currentNode} title={props.title} body={props.body}/>
    </div>
    )
}

export default GridDisplay;