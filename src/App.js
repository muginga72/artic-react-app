import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ArtistsPage from './components/ArtistsPage';
import ArtworksPage from './components/ArtworksPage';
// import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/artists" element={<ArtistsPage />} />
          <Route path="/artworks" element={<ArtworksPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
