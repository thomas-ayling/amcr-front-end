const Titles = ({ nodeData, id, isVisible }) => {
  return (
    <h5 className='diagram-title-individual-title'>
      <u>{isVisible ? nodeData[id].title : ''}</u>
    </h5>
  );
};

export default Titles;
