import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './MarkdownComponent.css';

const MarkdownComponent = ({ markdownText, classNames }) => {
  return (
    <div className={`markdown-basic-component ${classNames}`}>
        <ReactMarkdown className='react-markdown' children={markdownText} remarkPlugins={[remarkGfm]} />
    </div>
  )
}

export default MarkdownComponent;