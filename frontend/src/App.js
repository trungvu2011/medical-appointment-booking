import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import RecordPage from './pages/RecordPage';
import DoctorPage from './pages/DoctorPage';
import axios from 'axios';

function App() {
  axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/record" element={<RecordPage />} />
        <Route path="/doctors" element={<DoctorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
