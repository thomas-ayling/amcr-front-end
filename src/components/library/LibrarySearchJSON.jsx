import React, { useState, useEffect } from "react";
// import axios from "axios";
import BookCover from "./TestBookCover.png";
import "./LibrarySearch.css";
// import {BsFillArrowDownCircleFill} from 'react-icons/bs';

const LibrarySearch = () => {
  const [books, setBooks] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchParam] = useState(["title", "author", "genre"]);
  const [filterParam, setFilterParam] = useState(["All"]);

  // useEffect(() => {
  //   fetch("https://DB.com/library/getAll")
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         setBooks(result);
  //       },
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     );
  // }, []);

  const data = Object.values(fakebooks);

  function search(fakebooks) {
    return fakebooks.filter((book) => {
      if (book.genre === filterParam) {
        return searchParam.some((newBook) => {
          return book[newBook].toString().toLowerCase().indexOf(searchInput.toLowerCase()) > -1;
        });
      } else if (filterParam === "All") {
        return searchParam.some((newBook) => {
          return book[newBook].toString().toLowerCase().indexOf(searchInput.toLowerCase()) > -1;
        });
      }
    });
  }

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
          <div className='Library-Genre-Select'>
            <select
              onChange={(e) => {
                setFilterParam(e.target.value);
              }}
              className='genre-select'
              aria-label='Filter Books by Genre'
            >
              <option value='All'>Filter By Genre</option>
              <option value='Java'>Java</option>
              <option value='Devops'>DevOps</option>
              <option value='Management'>Mangement</option>
              <option value='Python'>Python</option>
              <option value='Buisness'>Buisness</option>
            </select>
            <span className='focus'></span>
          </div>
        </div>

        <div className='Library-SearchResults-Wrapper'>
          <ul className='Library-BookList'>
            {search(data).map((book) => (
              <li className='Library-Item' key={book.alpha3Code}>
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
                    <div className='Library-Reservation-Wrapper'>
                      {(() => {
                        if (book.out === true)
                          return (
                            <div className='Library-Reader'>
                              <p className='Library-Reserve-Unavailable'>Unavailable. {book.reader} is currently reading the book.</p>
                              {/* <BsFillArrowDownCircleFill value={{color:'orange'}} onClick={!this.dropDownStatus}/> */}
                            </div>
                          );
                        else
                          return (
                            <div className='Library-Reader'>
                              <p className='Library-Reserve-Available'>Available. Reserve Below.</p>
                            </div>
                          );
                      })()}
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
