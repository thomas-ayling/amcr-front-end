import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Markdown from './components/PageContent/Markdown/Markdown'; //delete before pushing
import Diagram from './components/PageContent/Diagram/Diagram';    //delete before pushing
import Diagram1 from './components/PageContent/Diagram/Diagram1';  //delete before pushing
import Diagram2 from './components/PageContent/Diagram/Diagram2';
import DiagramTest from './components/PageContent/Diagram/DiagramTest';
import PageContent from './components/PageContent/PageContent';    //delete before pushing
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <>
    <Diagram2 />
  </>
  // </React.StrictMode>
);

reportWebVitals();
