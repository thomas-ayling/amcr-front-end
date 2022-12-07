import './PageContent.css';
import { useState } from 'react';

function PageContent() {
 return (
        <div className="pc--container">
        <button>Write Markdown text</button>
        <button>Configure diagram</button>
        </div>
    );
}

export default PageContent;