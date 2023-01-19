import React, { useState } from "react";
import "./LibrarySearch.css";
import "./ToggleVisibility.css";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export default function ToggleVisibility({ children }) {
  // React state to manage visibility
  const [show, setShow] = useState();

  function toggleShow() {
    setShow(!show);
  }
;
  return (
    <div className='component-container'>
      {show && children}
      {!show && (
        <div className='VisibilityToggler-Wrapper' onClick={toggleShow}>
          <BsFillArrowDownCircleFill className='Library-Reservation-Dropdown-Button' />
          <div className='VT-text'>
            <p className='VT-Button-Text'>Reserve</p>
          </div>
          <BsFillArrowDownCircleFill className='Library-Reservation-Dropdown-Button' />
        </div>
      )}
      {show && <BsFillArrowUpCircleFill className='Library-Reservation-Dropdown-Button' onClick={toggleShow} />}
    </div>
  );
}
