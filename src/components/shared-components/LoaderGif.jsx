import React from 'react';
import AjaxLoaderIcon from '../../assets/images/icons/ajax-loader.gif';
import { AjaxLoader } from '../../styles/styles';

const LoaderGif = () => {
  return (
    <>
      <picture>
        <AjaxLoader src={AjaxLoaderIcon} alt='Loader' />
      </picture>
    </>
  );
};

export default LoaderGif;
