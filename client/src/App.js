import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import MainRoutes from './MainRoutes';
import Footer from './components/Footer';
import React from 'react';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Header />
        <MainRoutes />
        <Footer />
      </Router>
    </React.StrictMode>
  );
}

export default App;
