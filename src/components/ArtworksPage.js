import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ArtworksPage() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    axios.get('https://api.artic.edu/api/v1/artworks')
      .then(response => {
        setArtworks(response.data.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div>
      <h1>Artworks</h1>
      <ul>
        {artworks.map(artwork => (
          <li key={artwork.id}>{artwork.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ArtworksPage;