import React from 'react';
import './App.css';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewYork from './pages/majorcities/newyork';
import CityPage from './pages/majorcities/newyork';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/majorcities/:city" element={<CityPage />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
