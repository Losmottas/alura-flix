import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './Components/Header';
// import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
