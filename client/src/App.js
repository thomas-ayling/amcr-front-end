
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import MainRoutes from './MainRoutes';
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
  );
}

export default App;
