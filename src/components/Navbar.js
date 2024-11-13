import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/artists">Artists</Link></li>
        <li><Link to="/artworks">Artworks</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;