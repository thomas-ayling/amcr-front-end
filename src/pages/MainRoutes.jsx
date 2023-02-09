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
import FutureWiki from './FutureWiki';
import FutureContacts from './FutureContacts';
import FutureLibrary from './FutureLibrary';
import ToastNotification from '../components/toast-notification/ToastNotification';

import './styles/MainRoutes.css';

const MainRoutes = () => {
  return (
    <div className='main-container'>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/wiki' element={<Wiki />} />
        <Route exact path='/contacts' element={<Contacts />} />
        <Route exact path='/case-studies' element={<CaseStudies />} />
        <Route exact path='/library' element={<Library />} />
        <Route exact path='/future-homepage' element={<Configuration />} />
        <Route exact path='/future-wiki' element={<FutureWiki />} />
        <Route exact path='/future-contacts' element={<FutureContacts />} />
        <Route exact path='/future-library' element={<FutureLibrary />} />
        <Route exact path='/admin-panel' element={<AdminPanel />} />
        <Route exact path='/case-study/:id' element={<CaseStudySingle />} />
        <Route exact path='/case-study/edit/:id' element={<CaseStudySingle editMode={true} />} />
      </Routes>
      <ToastNotification />
    </div>
  );
};

export default MainRoutes;
