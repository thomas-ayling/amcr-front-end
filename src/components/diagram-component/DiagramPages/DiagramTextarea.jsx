import React from 'react';

const DiagramTextarea = ({ type, nodeTitle, setNodeTitle, nodeBody, setNodeBody, currentNode }) => {
  const test = type === 'title' ? nodeTitle[currentNode] : type === 'body' ? nodeBody[currentNode] : null;
  const handleChange = (e) => {
    if (type === 'title') setNodeTitle((prevTitle) => ({ ...prevTitle, [currentNode]: e.target.value }));
    else if (type === 'body') setNodeBody((prevBody) => ({ ...prevBody, [currentNode]: e.target.value }));
  };

  return (
    <div className={type === 'title' ? 'diagram-title-input' : type === 'body' ? 'diagram-body-input' : null}>
      <textarea
        className={type === 'title' ? 'diagram-builder-textarea-title' : type === 'body' ? 'diagram-builder-textarea-body' : null}
        value={type === 'title' ? nodeTitle[currentNode] : type === 'body' ? nodeBody[currentNode] : null}
        placeholder='Title'
        onChange={handleChange}
      />
    </div>
  );
};

export default DiagramTextarea;
