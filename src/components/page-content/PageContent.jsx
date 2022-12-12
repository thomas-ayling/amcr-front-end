import './PageContent.css';
import { useState } from 'react';
import Markdown from './Markdown/Markdown';
import Diagram from './Diagram/Diagram';

function PageContent() {
    const [pressed, setPressed] = useState({
        markdown: false,
        diagram: false
    });

    function handleClick(value) {
        if (value === 'markdown') {
            setPressed(prevPressed => ({
                ...prevPressed,
                markdown: !prevPressed.markdown,
                diagram: false
            }))
        } else {
            setPressed(prevPressed => ({
                ...prevPressed,
                markdown: false,
                diagram: !prevPressed.diagram
            }))
        }
    }

  return (
    <>
      <div className='pc--container'>
        <button name='markdown' onClick={e => handleClick(e.target.name)}>Configure Markdown Text</button>
        <button name='diagram' onClick={e => handleClick(e.target.name)}>Configure Diagram</button>
      </div>
      {pressed.markdown === true ? <Markdown/> : pressed.diagram === true ? <Diagram/> : null}
    </>
  );
}

export default PageContent;
