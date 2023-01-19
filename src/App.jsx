import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import MainRoutes from './pages/MainRoutes';
import Footer from './components/footer/Footer';
import React from 'react';
import 'react-bootstrap';

import Diagram from './components/diagram-component/Diagram';

function App() {
  return (
    // <Router>
    //   <NavBar />
    //   <MainRoutes />
    //   <Footer />
    // </Router>
    <Diagram />
  );
}

export default App;
