import React, { useState } from 'react';
import { useEffect } from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';
import { Modal, Button } from 'react-bootstrap';
import { runToastNotification } from '../toast-notification/ToastNotification';
import { get, post, put } from '../../service/LibraryService';
import ToggleVisibility from './ToggleVisibility';

import './LibrarySearch.css';

// Component for the engineering centre library
const LibrarySearch = () => {
  const [books, setBooks] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [searchParam] = useState(['title', 'author', 'genre']);
  const [filterParam, setFitlerParam] = useState('');
  const [bookTitleInput, setBookTitleInput] = useState('');
  const [bookAuthorInput, setBookAuthorInput] = useState('');
  const [bookCoverInput, setBookCoverInput] = useState('');
  const [bookGenreInput, setBookGenreInput] = useState('none');

  const [showModal, setShow] = useState(false);
  const [responseStatus, setResponseStatus] = useState();

  // On render calls the axios request for loading all books
  useEffect(() => {
    get(setBooks, setResponseStatus);
  }, []);

  useEffect(() => {
    if (responseStatus === 'get-error') {
      runToastNotification('There was an error loading library data', 'error');
      return;
    }
    if (responseStatus === 'post-error') {
      runToastNotification('There was an error saving this book', 'error');
      return;
    }
    if (responseStatus === 'post-success') {
      runToastNotification('Book successfully saved!', 'success');
      return;
    }
    if (responseStatus === 'put-error') {
      runToastNotification('There was an error reserving this book', 'error');
      return;
    }
    if (responseStatus === 'put-success') {
      runToastNotification('Book successfully reserved!', 'success');
      setTimeout(() => window.location.reload(), 5000);
      return;
    }
  }, [responseStatus]);

  // ADMIN ONLY - Axios request for adding new book to library
  const uploadBook = (e) => {
    e.preventDefault();

    if (bookGenreInput === 'none') {
      runToastNotification('Please select a genre for your book.', 'error');
      return;
    }
    if (bookTitleInput.trim() === '') {
      runToastNotification('Book title input is invalid.', 'error');
      return;
    }
    if (bookAuthorInput.trim() === '') {
      runToastNotification('Book author input is invalid.', 'error');
      return;
    }
    if (bookCoverInput.trim() === '') {
      runToastNotification('Book cover input is invalid.', 'error');
      return;
    }

    const newBook = {
      title: bookTitleInput,
      genre: bookGenreInput,
      author: bookAuthorInput,
      available: true,
      cover: bookCoverInput,
    };
    post(newBook, setResponseStatus);
  };

  // Function for reserving specific book with axios request

  // Function that is created within the book mapping to create a reservation area
  const ReserveWrapper = ({ book }) => {
    const [readerNameInput, setReaderNameInput] = useState('');
    const [readerEmailInput, setReaderEmailInput] = useState('');

    const reserveBook = (e, book) => {
      e.preventDefault();

      if (readerNameInput.trim() == '') {
        runToastNotification('Please enter a valid name.', 'error');
        return;
      }
      if (readerEmailInput.trim() == '') {
        runToastNotification('Please enter a valid email address.', 'error');
        return;
      }

      const reserveBook = {
        reader: readerNameInput,
        email: readerEmailInput,
      };
      put(book.id, reserveBook, setResponseStatus);
    };

    return book.available === true ? (
      <ToggleVisibility>
        <form className='Library-Reservation-Input-Container' onSubmit={(e) => reserveBook(e, book)}>
          <input type='search' className='Library-Reservation-Input' name='reader-name-input' placeholder='Name' value={readerNameInput} onChange={(e) => setReaderNameInput(e.target.value)} required />
          <input type='email' className='Library-Reservation-Input' name='reader-firstname-input' placeholder='Email' value={readerEmailInput} onChange={(e) => setReaderEmailInput(e.target.value)} required />
          <input type='submit' value='Reserve' className='Library-Reservation-Button' />
        </form>
      </ToggleVisibility>
    ) : (
      <ToggleVisibility>
        <p>Unavailable. {book.reader} Is currently reading it.</p>
      </ToggleVisibility>
    );
  };

  // Search function that allows the user to filter and search through the books dependant on genre/search input
  function search(items) {
    // eslint-disable-next-line
    return items.filter((item) => {
      if (item.genre === filterParam) {
        return searchParam.some((newItem) => item[newItem].toString().toLowerCase().indexOf(searchInput.toLowerCase()) > -1);
      } else if (filterParam === '') {
        return searchParam.some((newItem) => item[newItem].toString().toLowerCase().indexOf(searchInput.toLowerCase()) > -1);
      }
    });
  }

  // Simple function for hiding book upload modal
  function handleClose() {
    setShow(false);
    window.location.reload();
  }

  // Simple function for showing book upload modal
  function handleShow() {
    setShow(true);
  }

  return (
    <div className='Library-Container'>
      <div className='Library-Wrapper'>
        <div className='Library-Genre-Select-Wrapper'>
          <nav className='Library-Genre-Select-Options'>
            <button className='Library-Genre-Selector-Button' onClick={() => setFitlerParam('Java')}>
              Java
            </button>
            <button className='Library-Genre-Selector-Button' onClick={() => setFitlerParam('Python')}>
              Python
            </button>
            <button className='Library-Genre-Selector-Button' onClick={() => setFitlerParam('Devops')}>
              DevOps
            </button>
            <button className='Library-Genre-Selector-Button' onClick={() => setFitlerParam('Management')}>
              Management
            </button>
            <button className='Library-Genre-Selector-Button' onClick={() => setFitlerParam('Business')}>
              Business
            </button>
            <button className='Library-Genre-Selector-Button Library-Genre-Selector-Reset-Button' onClick={(e) => setFitlerParam('')}>
              Reset
            </button>
          </nav>
        </div>
        <div className='Library-SearchBar-Wrapper'>
          <label htmlFor='search-bar'>
            <input type='search' name='search-bar' className='Library-Search-Input' placeholder='Search Library Here...' value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
          </label>
          {/* Genre Book selector dropdown that only appears on mobiles < 425px in screen width */}
          <div className='Library-Genre-Select-Dropdown'>
            <select value={filterParam} onChange={(e) => setFitlerParam(e.target.value)} className='genre-select' aria-label='Filter Books by Genre'>
              <option value=''>Filter By Genre</option>
              <option value='Java'>Java</option>
              <option value='Devops'>DevOps</option>
              <option value='Management'>Mangement</option>
              <option value='Python'>Python</option>
              <option value='Business'>Business</option>
            </select>
            <span className='focus'></span>
          </div>
          {/* ADMIN ONLY - Upload for new book into the database forum/modal */}
          <BsPlusCircleFill className='Library-NewBook-Dropdown-Button' onClick={handleShow} />
          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add a new book</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form className='Library-Reservation-Input-Container' onSubmit={(e) => uploadBook(e)}>
                <input className='Library-Reservation-Input' type='text' name='book-title-input' placeholder='Book title...' value={bookTitleInput} onChange={(e) => setBookTitleInput(e.target.value)} required />
                <input className='Library-Reservation-Input' type='text' name='book-author-input' placeholder='Book author...' value={bookAuthorInput} onChange={(e) => setBookAuthorInput(e.target.value)} required />
                <input className='Library-Reservation-Input' type='text' name='book-cover-input' placeholder='Cover image link...' value={bookCoverInput} onChange={(e) => setBookCoverInput(e.target.value)} required />
                <select value={bookGenreInput} onChange={(e) => setBookGenreInput(e.target.value)} className='genre-select' aria-label='Filter Books by Genre'>
                  <option value='none' disabled>
                    Select Genre
                  </option>
                  <option value='Java'>Java</option>
                  <option value='Devops'>DevOps</option>
                  <option value='Management'>Mangement</option>
                  <option value='Python'>Python</option>
                  <option value='Business'>Business</option>
                </select>
                <button className='Library-Reservation-Button'>Add</button>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button className='Library-Reservation-Button-Exit' onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>

        <div className='Library-SearchResults-Wrapper'>
          <ul className='Library-BookList'>
            {search(books).map((book, index) => (
              <>
                <li className='Library-Item' key={index}>
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
                      <div className='Library-Reservation-Wrapper'>{book.available ? <ReserveWrapper book={book} /> : <p style={{ margin: '15px 0 0 0' }}>This book has already been reserved by {book.reader}.</p>}</div>
                    </div>
                  </article>
                </li>
                <hr className='Library-Book-Divider' />
              </>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LibrarySearch;
