import axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";
// const baseUrl = 'http://ec-acad-elb-a07a79316f54cbbf.elb.eu-west-2.amazonaws.com:3001/feedback';
const baseUrl = 'localhost:3001/text-intro/location';

const getTextIntro = (location) => {
    axios
      .get(`${baseUrl}/${location}`)
      .then((result) => {
        const [textIntro, setTextIntro] = useState('');
        setTextIntro(result.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }
export { getTextIntro };