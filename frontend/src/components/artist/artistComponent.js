import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ArtistComponent = () => {
    const [artists, setArtists] = useState([]);
    useEffect(() => {
        const fetchArtists = async () => {
            try {
                const response = await fetch('http://localhost:5000/artist'); 
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setArtists(data);
            } catch (error) {
                console.error('Error fetching artists:', error);
            }
        };

        fetchArtists();
    }, []); 
    console.log(artists)
    return (
        <div className="popular_artists">
            <div className="h4">
                <h4>Popular Artists</h4>
            </div>
            <div className="item">
                {artists.map(artist => (
                    <li key={artist.id}>
                        <Link to={`/artist/${artist.artist_id}/${artist.name}`}>
                            <img src={artist.artist_img} alt={artist.name} title={artist.name} />
                        </Link>
                    </li>
                ))}
            </div>
        </div>
    );
}

export default ArtistComponent;
