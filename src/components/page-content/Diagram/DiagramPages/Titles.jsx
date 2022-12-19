const Titles = (props) => {
  console.log(props.id);
  return (
    <h5 className='diagram-title-grid-title'>
      <u>{props.title[props.id]}</u>
    </h5>
  );
}

export default Titles;