import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ArtistsPage() {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    axios.get('https://api.artic.edu/api/v1/artists')
      .then(response => {
        setArtists(response.data.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div>
      <h1>Artists</h1>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ArtistsPage;