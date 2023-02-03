import React from 'react';

const DiagramTextarea = ({ type, nodeArray, setNodeArray, currentNode }) => {
  const handleChange = (e) => {
    let newNodeArray = [...nodeArray];
    if (type === 'title') {
      newNodeArray[currentNode - 1].title = e.target.value;
      setNodeArray(newNodeArray);
    } else if (type === 'body') {
      newNodeArray[currentNode - 1].body = e.target.value;
      setNodeArray(newNodeArray);
    }
  };
  return (
    <div className={type === 'title' ? 'diagram-title-input' : type === 'body' ? 'diagram-body-input' : null}>
      <textarea
        className={type === 'title' ? 'diagram-builder-textarea-title' : type === 'body' ? 'diagram-builder-textarea-body' : null}
        value={type === 'title' ? nodeArray[currentNode - 1].title : type === 'body' ? nodeArray[currentNode - 1].body : null}
        placeholder={type === 'title' ? 'Node Title' : type === 'body' ? 'Node Body Content' : null}
        onChange={handleChange}
      />
    </div>
  );
};

export default DiagramTextarea;
