import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import MainRoutes from './MainRoutes';
import Footer from './components/footer/Footer';
import React from 'react';
import 'react-bootstrap';

import PageContent from './components/page-content/PageContent';

function App() {
  return (
      // <Router>
      //   <NavBar />
      //   <MainRoutes />
      //   <Footer />
      // </Router>
      <PageContent/>
  );
}

export default App;
