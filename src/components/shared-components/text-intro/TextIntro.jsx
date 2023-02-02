import React, { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import './TextIntro.css';
import { StyledHr } from '../../../styles/styles';
import MarkdownComponent from '../../markdown-component/MarkdownComponent';
// const baseUrl = 'http://ec-acad-elb-a07a79316f54cbbf.elb.eu-west-2.amazonaws.com:3001/feedback';

const TextIntro = (location) => {
  const [textIntroData, setTextIntroData] = useState([]);
  const baseUrl = 'http://localhost:3001/text-intro/location';
  const headers = { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "*", "Access-Control-Allow-Credentials": "true" };

  
  useEffect(() => {
    axios
      .get(`${baseUrl}/${location}`, { headers: headers })
      .then((result) => {
        console.log(result);
        setTextIntroData(result.data);
        console.log(textIntroData);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

    return (
      <div>
        {textIntroData.map((intro) => (        
        <div className='textintro-container'>
          <div className='textintro-wrapper'>
            <h1 className='textintro-title'>{intro.title}</h1>
            <StyledHr />
            <h2 className='textintro-description'>
              <MarkdownComponent markdownText={intro.description}/>
            </h2>
          </div>
        </div>
    ))}
    </div>
    )
}

export default TextIntro;