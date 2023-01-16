import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Wiki from './Wiki';
import Contacts from './Contacts';
import CaseStudies from './CaseStudies';
import Library from './Library';
import Configuration from './ConfigurationPage';
import AdminPanel from './AdminPanel';
import CaseStudySingle from './CaseStudySingle';

import ToastNotification from '../components/toast-notification/ToastNotification';

import './styles/MainRoutes.css'

const MainRoutes = () => {
  return (
    <div className='main-container'>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/wiki' element={<Wiki />} />
        <Route exact path='/contacts' element={<Contacts />} />
        <Route exact path='/case-studies' element={<CaseStudies />} />
        <Route exact path='/library' element={<Library />} />
        <Route exact path='/config' element={<Configuration />} />
        <Route exact path='/admin-panel' element={<AdminPanel />} />
        <Route exact path='/case-study/:id' element={<CaseStudySingle />} />
      </Routes>
      <ToastNotification />
    </div>
  );
};

export default MainRoutes;
