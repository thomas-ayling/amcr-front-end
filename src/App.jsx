import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import MainRoutes from './pages/MainRoutes';
import Footer from './components/footer/Footer';
import React from 'react';
import 'react-bootstrap';

function App() {
  return (
    <Router>
      <NavBar />
      <MainRoutes />
      <Footer />
    </Router>
  );
}

export default App;
