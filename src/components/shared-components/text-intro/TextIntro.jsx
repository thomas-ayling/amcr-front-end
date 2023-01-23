import React from 'react';
import './TextIntro.css';
import { StyledHr } from '../styles/styles';


const TextIntro = () => {
    const[title, setTitle] = useState("We are GlobalLogic!");
    const[description, setDescription] = useState("We integrate experience design and complex engineering to help our clients imagine what's possible and accelerate their transition into tomorrow's digital businesses.");

    return (
        <div className='textintro-container'>
        <div className='textintro-wrapper'>
          <h1 className='textintro-title'>{title}</h1>
          <StyledHr />
          <h2 className='textintro-description'>{description}</h2>
        </div>
      </div>
    )
}