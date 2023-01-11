import React, { useState } from "react";
import "./LibrarySearch.css";
import {BsFillArrowDownCircleFill} from 'react-icons/bs';
import {BsFillArrowUpCircleFill} from 'react-icons/bs';


export default function ToggleVisibility({ children }) {

  // React state to manage visibility
  const [show, setShow] = useState();

  // function to toggle the boolean value
  function toggleShow() {
    setShow(!show);
  }
//   var buttonText = show ? "Hide Component" : "Show Component";

  return (
    <div className="component-container">
      {show && children}
      {!show && <BsFillArrowDownCircleFill className='Library-Reservation-Dropdown-Button' onClick={toggleShow}/>}
      {show && <BsFillArrowUpCircleFill className='Library-Reservation-Dropdown-Button' onClick={toggleShow}/>}
    </div>
  );
}