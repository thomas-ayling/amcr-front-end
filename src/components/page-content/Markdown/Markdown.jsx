import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useState, useEffect } from 'react';
import axios from 'axios';
import remarkPlantUml from '@akebifiky/remark-simple-plantuml';

import './Markdown.css';

const baseUrl = 'http://localhost:3001';

function Markdown() {
  const [input, setInput] = useState('');
  const [id, setId] = useState(0);

  useEffect(() => {
    axios.get(`${baseUrl}/page-content/markdown/get-latest`)
    .then((res) => {
      setInput(res.data.content);
      setId(res.data.id);
    })
    .catch((error) => {
      console.log(error);
    })
  }, [])

  const output = {
    id: id,
    content: input
  };

  const markdownStyles = {
    backgroundColor: input !== '' ? 'rgb(249, 249, 249)' : 'transparent',
    padding: input !== '' ? '15px' : '0px',
    border: input !== '' ? '1px solid #f37037' : 'none'
  };

  function updateContent() {
    axios.put(`${baseUrl}/page-content/markdown/update/${id}`, output)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const preview = (
    <div className='markdown--preview--title'>
      <u>Preview</u>
    </div>
  );

  const button = <button className='submit--button' onClick={updateContent}>Confirm Changes</button>;

  return (
    <div className='markdown--container'>
      <textarea autoFocus className='markdown--textbox' value={input} name='input' onChange={(e) => setInput(e.target.value)} />
      {input !== '' ? preview : null}
      <div className='optional--display'>
        <div style={markdownStyles} className='markdown--preview'>
          <ReactMarkdown className='react--markdown' children={input} style={markdownStyles} remarkPlugins={[remarkGfm, remarkPlantUml]} />
        </div>
        {input !== '' ? button : null}
      </div>
    </div>
  );
}

export default Markdown;
