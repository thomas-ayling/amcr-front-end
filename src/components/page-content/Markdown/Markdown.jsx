import { useState, useEffect } from 'react';
import axios from 'axios';
import MarkdownDisplay from './MarkdownDisplay';
import './Markdown.css';

const baseUrl = 'http://localhost:3001';

const Markdown = () => {
  const [id, setId] = useState();
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  
  const [newName, setNewName] = useState('');
  const [newSaveButtonIsClicked, setNewSaveButtonIsClicked] = useState(false);

  useEffect(() => {
    axios
      .get(`${baseUrl}/page-content/markdown/get-latest`)
      .then((res) => {
        setContent(res.data.content);
        setId(res.data.id);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const output = {
    id: id,
    content: content,
  };

  const markdownStyles = {
    backgroundColor: content !== '' ? 'rgb(249, 249, 249)' : 'transparent',
    padding: content !== '' ? '15px' : '0px',
    border: content !== '' ? '1px solid #f37037' : 'none',
  };

  function updateContent() {
    axios
      .put(`${baseUrl}/page-content/markdown/update/${id}`, output)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const preview = (
    <div className='markdown--preview--title'>
      <u>Preview</u>
    </div>
  );

  const nameList = ['Markdown 1', 'Another Markdown Right Here', 'Case Studies Page'];

  const button = (
    <button className='submit--button' onClick={updateContent}>
      Confirm Changes
    </button>
  );

  const createNewSave = () => {
    setNewSaveButtonIsClicked(!newSaveButtonIsClicked);
  }

  const newSaveStyles = {
    display: newSaveButtonIsClicked ? 'flex' : 'none'
  };

  const confirmSave = () => {
    nameList.push(newName);
    setNewName("");
  }

  return (
    <div className='markdown--container'>
      <div className='markdown-name-select-container'>
        <label className='markdown-name-select-label' htmlFor='markdownNameSelector'>
          Choose saved markdown text:
        </label>
        <select id='markdownNameSelector' className='markdown-name-select' name='markdownNameSelector' value={name} onChange={(e) => setName(e.target.value)}>
          <option value='' selected disabled hidden>
            Select
          </option>
          {nameList.map((e, i) => (
            <option value={e} key={i}>
              {e}
            </option>
          )).reverse()}
        </select>
        <button className='markdown-create-new-name-button' onClick={createNewSave}>Create new save</button>
      </div>
      <div className='markdown-new-name-container' style={newSaveStyles}>
        <textarea className='markdown-new-name-textbox' value={newName} name='name' placeholder='Enter name here' onChange={(e) => setNewName(e.target.value)}/>
        <button className='markdown-confirm-new-name-button' onClick={confirmSave}>Confirm save</button>
      </div>
      <textarea autoFocus className='markdown--textbox' value={content} name='content' onChange={(e) => setContent(e.target.value)} />
      {content !== '' ? preview : null}
      <div className='optional--display'>
        <div style={markdownStyles} className='markdown--preview'>
          <MarkdownDisplay content={content} markdownStyles={markdownStyles} />
        </div>
        {content !== '' ? button : null}
      </div>
    </div>
  );
};

export default Markdown;