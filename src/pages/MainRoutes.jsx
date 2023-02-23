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
import WikiSingle from './WikiSingle';


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
        <Route exact path='/engineering-excellence' element={<WikiSingle id={'027fc5e1-543c-423c-b586-7e095993d10c'} />} />
        <Route exact path='/employee-journey' element={<WikiSingle id={'027fc5e1-543c-423c-b586-7e095993d10c'} />} />
        <Route exact path='/charter-and-okrs' element={<WikiSingle id={'027fc5e1-543c-423c-b586-7e095993d10c'} />} />
        <Route exact path='/lab-science-decks' element={<WikiSingle id={'027fc5e1-543c-423c-b586-7e095993d10c'} />} />
      </Routes>
      <ToastNotification />
    </div>
  );
};

export default MainRoutes;
