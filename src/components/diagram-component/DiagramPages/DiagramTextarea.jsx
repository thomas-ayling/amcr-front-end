import React from 'react';

const DiagramTextarea = ({ type, nodeTitle, setNodeTitle, nodeBody, setNodeBody, nodeData, setNodeData, currentNode }) => {
  const handleChange = (e) => {
    if (type === 'title') {
      setNodeData((prevNodeData) => ({ ...prevNodeData, [currentNode]: { title: e.target.value, body: prevNodeData[currentNode].body } }));
    } else if (type === 'body') {
      setNodeData((prevNodeData) => ({ ...prevNodeData, [currentNode]: { title: prevNodeData[currentNode].title, body: e.target.value } }));
    }
  };

  return (
    <div className={type === 'title' ? 'diagram-title-input' : type === 'body' ? 'diagram-body-input' : null}>
      <textarea
        className={type === 'title' ? 'diagram-builder-textarea-title' : type === 'body' ? 'diagram-builder-textarea-body' : null}
        value={type === 'title' ? nodeData[currentNode].title : type === 'body' ? nodeData[currentNode].body : null}
        placeholder={type === 'title' ? 'Node Title' : type === 'body' ? 'Node Body Content' : null}
        onChange={handleChange}
      />
    </div>
  );
};

export default DiagramTextarea;
