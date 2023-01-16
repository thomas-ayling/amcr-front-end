const Titles = ({ title, id }) => {
  return (
    <h5 className='diagram-title-individual-title'>
      <u>{title[id]}</u>
    </h5>
  );
};

export default Titles;