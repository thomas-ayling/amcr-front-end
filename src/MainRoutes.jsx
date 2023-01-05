import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Wiki from './pages/Wiki';
import Contacts from './pages/Contacts';
import CaseStudies from './pages/CaseStudies';
import Library from './pages/Library';
import Configuration from './pages/ConfigurationPage';
import AdminPanel from './pages/AdminPanel';
import { CaseStudySingle } from './pages/case-study-single/CaseStudySingle';

const MainRoutes = () => {
  return (
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route exact path='/wiki' element={<Wiki />} />
      <Route exact path='/contacts' element={<Contacts />} />
      <Route exact path='/case-studies' element={<CaseStudies />} />
      <Route exact path='/library' element={<Library />} />
      <Route exact path='/config' element={<Configuration />} />
      <Route exact path='/admin-panel' element={<AdminPanel />} />
      <Route exact path='/case-studies/:id' element={<CaseStudySingle />} />
    </Routes>
  );
};

export default MainRoutes;
