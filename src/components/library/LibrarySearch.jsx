import React, { useState } from "react";
import "./LibrarySearch.css";
import dataMock from "./Books.json";

const LibrarySearch = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchParam] = useState(["name", "author", "genre"]);
  const [filterParam, setFitlerParam] = useState("");
  const [dropDownStatus] = useState(false);

  function search(items) {
    console.log(dataMock);
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

  return (
    <div className='Library-Container'>
      <div className='Library-Wrapper'>
        <div className='Library-SearchBar-Wrapper'>
          <label htmlFor='search-bar'>
            <input
              type="text"
              name="search-bar"
              className='Library-Search-Input'
              placeholder='Search Library Here...'
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </label>
          <div className='Library-Genre-Select'>
            <select
              value={filterParam}
              onChange={(e) => {setFitlerParam(e.target.value)}}
              className='genre-select'
              aria-label='Filter Books by Genre'
            >
              <option value="">Filter By Genre</option>
              <option value="Java">Java</option>
              <option value="Devops">DevOps</option>
              <option value="Management">Mangement</option>
              <option value="Python">Python</option>
              <option value="Buisness">Buisness</option>
            </select>
            <span className='focus'></span>
          </div>
        </div>

        <div className='Library-SearchResults-Wrapper'>
          <ul className='Library-BookList'>
            {search(dataMock).map((book) => (
              <li className='Library-Item' key={book.name}>
                <article className='Library-Book'>
                  <div className='Library-Book-Cover'>
                    <img className='Library-Book-Cover-Image' src={book.cover} alt={book.name} />
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
                        if (book.out === false)
                            return (
                                <div className="Library-Reader">
                                  <p className="Library-Reserve-Available">Available. Reserve Below.</p>
                                </div>
                                )
                        else
                            return (
                              <div className='Library-Reserve-Wrapper'>
                                <p className='Library-Reserve-Unavailable'>Unavailable. {book.reader} is currently reading the book.</p>
                                <div>
                                  <div className='Library-Reservation-Wrapper'>
                                    {() => {
                                      if (dropDownStatus === true) return (
                                      <div>
                                        <button onClick={!dropDownStatus}>DropDown</button>
                                        <p>testing dropped dropDownStatus</p>
                                      </div>
                                      )
                                      else return (<button onClick={!dropDownStatus}>DropDown</button>);
                                    }}
                                  </div>
                                </div>
                              </div>
                            );
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