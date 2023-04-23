import React, { useEffect,useState } from "react";
import one from "../../images/10.jpg";
import './artist.css'
import { useParams } from "react-router-dom";

const Artist = () => {
    const [data,setData] = useState([])
    const val = useParams()
    // console.log(val)
    
    useEffect(() =>
        {fetch(`http://localhost:5000/artist/${val.id}`)
        .then(response=>response.json())
        .then(data =>setData(data))
        .catch(err => console.log(err))}
    ,)
    // console.log(data)
    return (
         
<div className="artist-background">
        <nav>
        <ul>
            <li class="brand">Spotify</li>
            <li>Home</li>
            <li>About</li>
        </ul>
    </nav>
        <h1>{val.name}</h1>
    <div class="container">
        {data.map((song) => (<div class="songList">
            {/* <h1>{song.song_name}</h1> */}
            <div class="songItemContainer">
                <div class="songItem">
                    <img src={song.img} alt="alan" />
                    <span class="songName">{song.song_name}</span>
                    <span class="songlistplay"><span class="timestamp">05:34 <i id="0" class="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
                
            </div>
        </div>))}
        <div class="songBanner"></div>
    </div>

    <div class="bottom">
        <input type="range" name="range" id="myProgressBar" min="0" value="0" max="100" />
        <div class="icons">
            
            <i class="fas fa-3x fa-step-backward" id="previous"></i>
            <i class="far fa-3x fa-play-circle" id="masterPlay"></i>
            <i class="fas fa-3x fa-step-forward" id="next"></i> 
        </div>
        {/* <div class="songInfo">
        <img src={one} alt="alan" /> <span id="masterSongName">Warriyo - Mortals [NCS Release]</span>
        </div> */}
    </div>
</div>
 );
}
 
export default Artist;