import React from 'react';
import './TextIntro.css';
import { StyledHr } from '../../../styles/styles';


const TextIntro = ({content}) => {
    return (
        <div className='textintro-container'>
        <div className='textintro-wrapper'>
          <h1 className='textintro-title'>{content.title}</h1>
          <StyledHr />
          <h2 className='textintro-description'>{content.description}</h2>
        </div>
      </div>
    )
}

export default TextIntro;