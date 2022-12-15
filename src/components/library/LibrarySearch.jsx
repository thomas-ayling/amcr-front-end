import React, { useState, useEffect } from "react";
// import axios from "axios";
import BookCover from "./TestBookCover.png";
import "./LibrarySearch.css";
// import {BsFillArrowDownCircleFill} from 'react-icons/bs';

// *** future axios implementation - Once database is populated *** //
// const getData = async () => {
//     const {data} = await axios.get('https://databaseUrl/books/getAll');
//     setBooks(data);
// }
// *** future axios implementation - Once database is populated *** //

const LibrarySearch = () => {
//   const [books, setBooks] = useState([]);
  const [searchInput, setSearchInput] = useState("");
//   const [dropDownStatus, setDropDownStatus] = useState(false);
//   const [searchParam] = useState(["name", "author", "genre"]);

  // Testing Library sudo Database
  var fakebooks = [
    { id: 1, name: "book One", genre: "Devops", author: "Charles", reader: "John", out: false, cover: { BookCover } },
    { id: 2, name: "book Two", genre: "Java", author: "John", reader: "", out: false, cover: { BookCover } },
    { id: 3, name: "book Three", genre: "Devops", author: "Steve", reader: "Kentaro Miura", out: true, cover: { BookCover } },
    { id: 4, name: "book Four", genre: "Python", author: "Alex", reader: "Kevin", out: true, cover: { BookCover } },
    { id: 5, name: "book Five", genre: "Management", author: "Tom", reader: "Smith", out: true, cover: { BookCover } },
    { id: 6, name: "book Six", genre: "Python", author: "Zoriana", reader: "tanjiro", out: false, cover: { BookCover } },
    { id: 7, name: "book Seven", genre: "Java", author: "Kya", reader: "Haruki Murakami", out: false, cover: { BookCover } },
    { id: 8, name: "book Eight", genre: "Java", author: "Stanislav", reader: "John", out: true, cover: { BookCover } },
    { id: 9, name: "book Nine", genre: "Buisness", author: "Jab", reader: "Saitama", out: false, cover: { BookCover } },
  ];

//   useEffect(() => {
//     getData();
//     setBooks(fakebooks);
//   });

  return (
    <div className='Library-Container'>
      <div className='Library-Wrapper'>
        <div className='Library-SearchBar-Wrapper'>
          <label htmlFor='search-bar'>
            <input
              type='search'
              name='search-bar'
              className='Library-Search-Input'
              placeholder='Search Library Here...'
              value={searchInput}
              // When the user types the search input state is set to the value
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </label>
        </div>

        <div className='Library-SearchResults-Wrapper'>
          <ul className='Library-BookList'>
            {fakebooks.map((book) => (
              <li className='Library-Item' key={book.id}>
                <article className='Library-Book'>
                  <div className='Library-Book-Cover'>
                    <img className='Library-Book-Cover-Image' src={BookCover} alt={book.name} />
                  </div>
                  <div className='Library-Book-Content'>
                    <div className='Library-Book-Data'>
                      <p className='Library-Book-Detail'>
                        <em className='Library-Orange'>Title: </em>
                        {book.name}
                      </p>
                      <p className='Library-Book-Detail'>
                        <em className='Library-Orange'>Author: </em>
                        {book.author}
                      </p>
                      {/* <div className="Library-vl"></div> */}
                      <p className='Library-Book-Detail'>
                        <em className='Library-Orange'>Genre: </em>
                        {book.genre}
                      </p>
                    </div>
                    <div className="Library-Reservation-Wrapper">{
                    (() => {
                        if (book.out === true)
                            return (
                                <div className="Library-Reader">
                                    <p className="Library-Reserve-Unavailable">Unavailable. {book.reader} is currently reading the book.</p>
                                    {/* <BsFillArrowDownCircleFill value={{color:'orange'}} onClick={!this.dropDownStatus}/> */}
                                </div>)
                        else
                            return (
                                <div className="Library-Reader">
                                    <p className="Library-Reserve-Available">Available. Reserve Below.</p>
                                </div>)
                    })()
                    }
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