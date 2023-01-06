import './PageContent.css';
import { useState } from 'react';
import Markdown from './Markdown/Markdown';
import Diagram from './Diagram/Diagram';

import MarkdownComponent from '../markdown-component/MarkdownComponent';
import markdownText from '../../service/MarkdownComponentMockService';

function PageContent() {
  const [pressed, setPressed] = useState({
    markdown: false,
    diagram: false,
  });

  function handleClick(value) {
    if (value === 'markdown') {
      setPressed((prevPressed) => ({
        ...prevPressed,
        markdown: !prevPressed.markdown,
        diagram: false,
      }));
    } else {
      setPressed((prevPressed) => ({
        ...prevPressed,
        markdown: false,
        diagram: !prevPressed.diagram,
      }));
    }
  }

  return (
    <>
      <div className='pc--container'>
        <button name='markdown' onClick={(e) => handleClick(e.target.name)}>
          Configure Markdown Text
        </button>
        <button name='diagram' onClick={(e) => handleClick(e.target.name)}>
          Configure Diagram
        </button>
      </div>
      {pressed.markdown === true ? <Markdown /> : pressed.diagram === true ? <Diagram /> : null}
      <div className='markdown-component-container'>
        {/* <MarkdownComponent markdownText={markdownText[0].markdownText} classNames={markdownText[0].classNames} /> */}
        <MarkdownComponent markdownText={markdownText[1].markdownText} classNames={markdownText[1].classNames} />
      </div>
    </>
  );
}

export default PageContent;
