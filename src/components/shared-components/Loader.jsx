import React from 'react';
import LoaderIcon from '../../assets/images/icons/ajax-loader.gif';
import './SharedStyles.css'

const Loader = () => {
  return (
    <>
      <img src={LoaderIcon} alt='Loader' id='loader-icon' />
    </>
  );
};

export default Loader;
