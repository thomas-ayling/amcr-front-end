import React, { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';
import './TextIntro.css';
import { StyledHr } from '../../../styles/styles';
import MarkdownComponent from '../../markdown-component/MarkdownComponent';

const TextIntro = ({location}) => {
  const [textIntroData, setTextIntroData] = useState([]);
  const baseUrl = 'http://ec-acad-elb-a07a79316f54cbbf.elb.eu-west-2.amazonaws.com:3001/text-intro/location';
  const headers = { 
                  "Content-Type": "application/json",
                  "Access-Control-Allow-Origin": "*",
                  "Access-Control-Allow-Headers": "*",
                  "Access-Control-Allow-Credentials": "true" };

  
  useEffect(() => {
    axios
      .get(`${baseUrl}/${location}`, { headers: headers })
      .then((result) => {
        setTextIntroData(result.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });

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