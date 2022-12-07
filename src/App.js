import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import MainRoutes from './MainRoutes';

import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';

function App() {
  return (
    <Router>
      <Header />
      <MainRoutes />
    </Router>
  );
}

export default App;
