import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Wiki from './pages/Wiki';
import Contacts from './pages/Contacts';
import CaseStudies from './pages/CaseStudies';
import Library from './pages/Library';

const MainRoutes = () => {
  return (
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route exact path='/wiki' element={<Wiki />} />
      <Route exact path='/contacts' element={<Contacts />} />
      <Route exact path='/case-studies' element={<CaseStudies />} />
      <Route exact path='/library' element={<Library />} />
    </Routes>
  );
};

export default MainRoutes;
