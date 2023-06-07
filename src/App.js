import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import Header from './components/header/Header';

import './main.css';

function App() {
  return (
    <div className="App">
       <Router>
        <Header />

        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
