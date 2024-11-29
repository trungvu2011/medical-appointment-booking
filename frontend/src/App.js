import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import RecordPage from './pages/RecordPage';
import axios from 'axios';

function App() {
  axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/record" element={<RecordPage />} />
      </Routes>
    </Router>
  );
}

export default App;
