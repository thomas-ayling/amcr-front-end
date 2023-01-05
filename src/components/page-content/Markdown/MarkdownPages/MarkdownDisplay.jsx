import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkPlantUml from '@akebifiky/remark-simple-plantuml';

const MarkdownDisplay = ({content, markdownStyles}) => {
  return (
    <div className='markdown-display'>
      <ReactMarkdown className='react-markdown' children={content} style={markdownStyles} remarkPlugins={[remarkGfm, remarkPlantUml]} />
    </div>
  );
};

export default MarkdownDisplay;
