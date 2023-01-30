const Titles = ({ nodeArray, id, isVisible }) => {
  return (
    <h5 className='diagram-title-individual-title'>
      <u>{isVisible ? nodeArray[id].title : ''}</u>
    </h5>
  );
};

export default Titles;
