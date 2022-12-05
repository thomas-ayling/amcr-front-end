import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import MainRoutes from './MainRoutes';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <MainRoutes />
      <Footer />
    </Router>
  );
}

export default App;
