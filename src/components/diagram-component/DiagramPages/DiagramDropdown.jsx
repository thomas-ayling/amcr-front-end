import React from 'react';

const DiagramDropdown = ({ id, currentNode, setCurrentNode, totalNum, setTotalNum }) => {
  const currentMap = (
    <select id={id} className='diagram-dropdown-select' name={id} value={currentNode} onChange={(e) => setCurrentNode(e.target.value)}>
      {Array(Number(totalNum))
        .fill()
        .map((_, i) => (
          <option value={i + 1} key={i}>
            {i + 1}
          </option>
        ))}
    </select>
  );
  const totalMap = (
    <select id={id} className='diagram-dropdown-select' name={id} value={totalNum} onChange={(e) => setTotalNum(e.target.value)}>
      <option value='3'>3</option>
      <option value='4'>4</option>
      <option value='5'>5</option>
      <option value='6'>6</option>
      <option value='7'>7</option>
      <option value='8'>8</option>
      <option value='9'>9</option>
    </select>
  );
  return (
    <div>
      <label className='diagram-dropdown-label' htmlFor={id}>
        {id === 'nodeTotalNumber' ? 'Total number of nodes:' : id === 'currentNode' ? 'Currently editing node:' : null}
      </label>
      {id === 'nodeTotalNumber' ? totalMap : id === 'currentNode' ? currentMap : null}
    </div>
  );
};

export default DiagramDropdown;
