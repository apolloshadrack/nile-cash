import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import History from './components/History';
import Homepage from './components/Homepage';
import './styles/App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
          <Routes>
            <Route path="/history" element={<History />} />
            <Route path="/" element={<Homepage />} />
          </Routes>
      
      </div>
    </Router>
  );
}

export default App;