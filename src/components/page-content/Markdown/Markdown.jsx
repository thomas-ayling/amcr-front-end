import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useState } from 'react';
import remarkPlantUml from '@akebifiky/remark-simple-plantuml';

import './Markdown.css';

function Markdown() {
  const [input, setInput] = useState('');

  const markdownStyles = {
    backgroundColor: input !== '' ? 'rgb(249, 249, 249)' : 'transparent',
    padding: input !== '' ? '15px' : '0px',
    border: input !== '' ? '1px solid #f37037' : 'none'
  };

  function updateInput(e) {
    setInput(e.target.value);
  }

  const preview = (
    <div className='markdown--preview--title'>
      <u>Preview</u>
    </div>
  );

  const button = <button className='submit--button'>Confirm Changes</button>;

  return (
    <div className='markdown--container'>
      <textarea autoFocus className='markdown--textbox' value={input} name='input' onChange={updateInput} />
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
