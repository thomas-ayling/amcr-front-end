import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useState } from 'react';
import remarkPlantUml from '@akebifiky/remark-simple-plantuml';

import './Markdown.css';

function Markdown() {

  const [input, setInput] = useState("");

  const markdownStyles = {
    backgroundColor: input !== "" ? "rgb(249, 249, 249)" : "transparent",
    padding: input !=="" ? "15px" : "0px"
  };

  function updateInput(e) {
    setInput(e.target.value);
  }

  return (
    <div className="markdown--container">
      <textarea 
      autoFocus 
      className='markdown--textbox' 
      value={input} 
      name='input'
      onChange={updateInput} />
      <div className="markdown--preview--title"><u>Preview</u></div>
      <div style={markdownStyles} className="markdown--preview">
        <ReactMarkdown className="react--markdown" children={input} style={markdownStyles} remarkPlugins={[remarkGfm, remarkPlantUml]}/>
      </div>
    </div>
  );
}

export default Markdown;