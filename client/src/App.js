import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import MainRoutes from './MainRoutes';
<<<<<<< HEAD
import Footer from './components/footer/Footer';



function App() {
  return (
    <Router>
      <NavBar />
      <MainRoutes />
      <Footer />
    </Router>
=======
import Footer from './components/Footer';
import React from 'react';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Navbar />
        <MainRoutes />
        <Footer />
      </Router>
    </React.StrictMode>
>>>>>>> origin/page-content
  );
}

export default App;
