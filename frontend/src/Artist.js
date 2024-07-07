import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Artist = () => {

    const fetchArtist = (artistNumber) => {
        axios.get(`http://localhost:5000/artist/${artistNumber}`)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    return (
        <div>
            Artists 
            <ul>
                {[1, 2, 3, 4, 5, 6].map((artistNumber) => (
                    <li key={artistNumber}>
                        <Link to={`/artist/${artistNumber}`} onClick={() => fetchArtist(artistNumber)}>
                            Artist {artistNumber}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        
    );
}

export default Artist;
