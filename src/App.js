import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import History from './pages/LoanHistory';
import RegisterForm from './forms/RegisterForm';
import LoginForm from './forms/LoginForm';
import Homepage from './pages/Homepage';
import './styles/App.css';
import LoanRequestForm from './forms/RequestLoanForm';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/history" element={<History />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/loan-request" element={<LoanRequestForm />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;