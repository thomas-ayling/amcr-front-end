import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import MainRoutes from './MainRoutes';
import Footer from './components/footer/Footer';



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
