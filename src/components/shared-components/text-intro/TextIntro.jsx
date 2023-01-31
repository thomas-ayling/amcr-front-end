import React, { useState } from "react";
import { useEffect } from "react";
import './TextIntro.css';
import { StyledHr } from '../../../styles/styles';
import MarkdownComponent from '../../markdown-component/MarkdownComponent';
import { getTextIntro } from '../../../service/TextIntroService';

const TextIntro = (location) => {
  const [textIntroData, setTextIntroData] = useState('');
  
  useEffect(() => {
    setTextIntroData(getTextIntro(location));
  }, []);

    return (
        <div className='textintro-container'>
        <div className='textintro-wrapper'>
          <h1 className='textintro-title'>{textIntroData.title}</h1>
          <StyledHr />
          <h2 className='textintro-description'>
            <MarkdownComponent markdownText={textIntroData.description}/>
          </h2>
        </div>
      </div>
    )
}

export default TextIntro;