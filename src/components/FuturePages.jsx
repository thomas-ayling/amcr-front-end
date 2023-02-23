import React from 'react';
import { Link } from 'react-router-dom';

const FuturePages = () => {
  const pageReload = () => {
    window.scrollTo({
      top: 0,
      behavior: 'instant',
    });
  };
  return (
    <div className='link-div-container'>
      <div className='link-div'>
        <div>
          <h1 className='link-title'>Future pages</h1>
        </div>

        <div className='button-div'>
          <button className='layout-button'>
            <Link className='layout-link' to={'/future-homepage'} onClick={pageReload}>
              Homepage
            </Link>
          </button>
          <button className='layout-button'>
            <Link className='layout-link' to={'/future-wiki'} onClick={pageReload}>
              Wiki
            </Link>
          </button>
          <button className='layout-button'>
            <Link className='layout-link' to={'/future-contacts'} onClick={pageReload}>
              Contacts
            </Link>
          </button>
          <button className='layout-button'>
            <Link className='layout-link' to={'/future-library'} onClick={pageReload}>
              Library
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FuturePages;
