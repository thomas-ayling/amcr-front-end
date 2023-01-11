import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
// import dataMock from "./Books.json";
import ToggleVisibility from "./ToggleVisibility";
import {BsPlusCircleFill} from 'react-icons/bs';
import { Modal, Button } from "react-bootstrap";

import "./LibrarySearch.css";

const LibrarySearch = () => {
  const [books, setBooks] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchParam] = useState(["title", "author", "genre"]);
  const [filterParam, setFitlerParam] = useState("");
  const [readerNameInput, setReaderNameInput] = useState("");
  const [readerEmailInput, setReaderEmailInput] = useState("");
  const [bookTitleInput, setBookTitleInput] = useState("");
  const [bookAuthorInput, setBookAuthorInput] = useState("");
  const [bookCoverInput, setBookCoverInput] = useState("");
  const [bookGenreInput, setBookGenreInput] = useState("");
  const [showModal, setShow] = useState(false);

  function handleClose() {setShow(false)};
  function handleShow() {setShow(true)};

  function search(items) {
    // eslint-disable-next-line
    return items.filter((item) => {
        if (item.genre === filterParam) {
            return searchParam.some((newItem) => {
                return (
                    item[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(searchInput.toLowerCase()) > -1
                );
            });
        } else if (filterParam === "") {
            return searchParam.some((newItem) => {
                return (
                    item[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(searchInput.toLowerCase()) > -1
                );
            });
        } 
    });
  }

  function uploadBook() {
    var bodyFormData = new FormData();
    bodyFormData.append('title', {bookTitleInput});
    bodyFormData.append('author', {bookAuthorInput});
    bodyFormData.append('genre', {bookGenreInput});
    bodyFormData.append('cover', {bookCoverInput});
    bodyFormData.append('reader', "");
    bodyFormData.append('available', true);
    axios({
      method: "post",
      url: "http://localhost:3001/library/upload",
      data: bodyFormData
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  }

  useEffect(() => {
    axios.get(`http://localhost:3001/library/`)
      .then((result)=> {
        setBooks(result.data);
      }).catch((err) => {
        console.log(err.message);
      })
  }, [])

  // (axios) .get.then.catch

   function ReserveWrapper({book}) {
    if(book.available===true) {
      return (
        <ToggleVisibility>
          <form className="Library-Reservation-Input-Container">
            <input className="Library-Reservation-Input" type="search" name="reader-name-input" placeholder="Name" value={readerNameInput} onChange={(e) => {setReaderNameInput(e.target.value)}}/>
            <input className="Library-Reservation-Input" type="search" name="reader-firstname-input" placeholder="Email" value={readerEmailInput} onChange={(e) => {setReaderEmailInput(e.target.value)}}/>
            <button className="Library-Reservation-Button">Reserve</button>
          </form>
          </ToggleVisibility>
        ); 
    }
      else
        return (
              <ToggleVisibility>
                <p>Unavailable. {book.reader} Is currently reading it.</p>
              </ToggleVisibility>
        
        );
    }

  return (
    <div className='Library-Container'>
      <div className='Library-Wrapper'>
        <div className="Library-Genre-Select-Wrapper">
          <nav className="Library-Genre-Select-Options">
            <button className="Library-Genre-Selector-Button" onClick={(e) => {setFitlerParam("Java")}}>Java</button>
            <button className="Library-Genre-Selector-Button" onClick={(e) => {setFitlerParam("Python")}}>Python</button>
            <button className="Library-Genre-Selector-Button" onClick={(e) => {setFitlerParam("Devops")}}>DevOps</button>
            <button className="Library-Genre-Selector-Button" onClick={(e) => {setFitlerParam("Management")}}>Management</button>
            <button className="Library-Genre-Selector-Button" onClick={(e) => {setFitlerParam("Buisness")}}>Buisness</button>
            <button className="Library-Genre-Selector-Button" onClick={(e) => {setFitlerParam("")}}>Reset</button>
          </nav>
        </div>
        <div className='Library-SearchBar-Wrapper'>
          <label htmlFor='search-bar'>
            <input type="search" name="search-bar" className='Library-Search-Input' placeholder='Search Library Here...' value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
          </label>
          <div className='Library-Genre-Select-Dropdown'>
            <select value={filterParam} onChange={(e) => {setFitlerParam(e.target.value)}} className='genre-select' aria-label='Filter Books by Genre'>
              <option value="">Filter By Genre</option>
              <option value="Java">Java</option>
              <option value="Devops">DevOps</option>
              <option value="Management">Mangement</option>
              <option value="Python">Python</option>
              <option value="Buisness">Buisness</option>
            </select>
            <span className='focus'></span>
          </div>
          <BsPlusCircleFill className='Library-NewBook-Dropdown-Button' onClick={handleShow}/>
          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Admin. New book entry.</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form className="Library-Reservation-Input-Container">
                <input className="Library-Reservation-Input" type="text" name="book-title-input" placeholder="Enter book title..." value={bookTitleInput} onChange={(e) => {setBookTitleInput(e.target.value)}}/>
                <input className="Library-Reservation-Input" type="text" name="book-author-input" placeholder="Enter book author..." value={bookAuthorInput} onChange={(e) => {setBookAuthorInput(e.target.value)}}/>
                <input className="Library-Reservation-Input" type="text" name="book-cover-input" placeholder="link to cover..." value={bookCoverInput} onChange={(e) => {setBookCoverInput(e.target.value)}}/>
                <select value={bookGenreInput} onChange={(e) => {setBookGenreInput(e.target.value)}} className='genre-select' aria-label='Filter Books by Genre'>
                  <option value="">Filter By Genre</option>
                  <option value="Java">Java</option>
                  <option value="Devops">DevOps</option>
                  <option value="Management">Mangement</option>
                  <option value="Python">Python</option>
                  <option value="Buisness">Buisness</option>
                </select>
                <button className="Library-Reservation-Button" onClick={uploadBook}>Reserve</button>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="success" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>

        <div className='Library-SearchResults-Wrapper'>
          <ul className='Library-BookList'>
            {search(books).map((book) => (
              <li className='Library-Item' key={book.title}>
                <article className='Library-Book'>
                  <div className='Library-Book-Cover'>
                    <img className='Library-Book-Cover-Image' src={book.cover} alt={book.title} />
                  </div>
                  <div className='Library-Book-Content'>
                    <div className='Library-Book-Data'>
                      <p className='Library-Book-Detail'>
                        <em className='Library-Orange'>Title: </em>
                        {book.title}
                      </p>
                      <p className='Library-Book-Detail'>
                        <em className='Library-Orange'>Author: </em>
                        {book.author}
                      </p>
                      <p className='Library-Book-Detail'>
                        <em className='Library-Orange'>Genre: </em>
                        {book.genre}
                      </p>
                    </div>
                    <div className="Library-Reservation-Wrapper">
                      <ReserveWrapper book={book}/>
                    </div>
                  </div>
                </article>
                <hr className='Library-Book-Divider' />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LibrarySearch;