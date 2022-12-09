import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import MainRoutes from './MainRoutes';

function App() {
  return (
    <Router>
      <Header />
      <MainRoutes />
    </Router>
  );
}

export default App;
