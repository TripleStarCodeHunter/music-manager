import React from "react";
import one from "../../images/10.jpg";
import './artist.css';

const Artist = () => {
    return ( 
<div className="artist-background">
        <nav>
        <ul>
            <li class="brand">Spotify</li>
            <li>Home</li>
            <li>About</li>
        </ul>
    </nav>

    <div class="artist-container">
        <div class="artist-songList">
            <h1>The Weeknd</h1>
            <div class="artist-songItemContainer">
                <div class="artist-songItem">
                    <img src={one} alt="alan" />
                    <span class="songName">Save Your Tears</span>
                    <span class="songlistplay"><span class="timestamp">05:34 <i id="0" class="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
                <div class="artist-songItem">
                    <img src={one} alt="alan" />
                    <span class="songName">Save Your Tears</span>
                    <span class="songlistplay"><span class="timestamp">05:34 <i id="1" class="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
                <div class="artist-songItem">
                    <img src={one} alt="alan" />
                    <span class="songName">Save Your Tears</span>
                    <span class="songlistplay"><span class="timestamp">05:34 <i id="2" class="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
                <div class="artist-songItem">
                    <img src={one} alt="alan" />
                    <span class="songName">Save Your Tears</span>
                    <span class="songlistplay"><span class="timestamp">05:34 <i id="3" class="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
                <div class="artist-songItem">
                    <img src={one} alt="alan" />
                    <span class="songName">Save Your Tears</span>
                    <span class="songlistplay"><span class="timestamp">05:34 <i id="4" class="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
                <div class="artist-songItem">
                    <img src={one} alt="alan" />
                    <span class="songName">Save Your Tears</span>
                    <span class="songlistplay"><span class="timestamp">05:34 <i id="5" class="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
                <div class="artist-songItem">
                    <img src={one} alt="alan" />
                    <span class="songName">Save Your Tears</span>
                    <span class="songlistplay"><span class="timestamp">05:34 <i id="6" class="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
                <div class="artist-songItem">
                    <img src={one} alt="alan" />
                    <span class="songName">Save Your Tears</span>
                    <span class="songlistplay"><span class="timestamp">05:34 <i id="7" class="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
                <div class="artist-songItem">
                    <img src={one} alt="alan" />
                    <span class="songName">Save Your Tears</span>
                    <span class="songlistplay"><span class="timestamp">05:34 <i id="8" class="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
                <div class="artist-songItem">
                    <img src={one} alt="alan" />
                    <span class="songName">Save Your Tears</span>
                    <span class="songlistplay"><span class="timestamp">05:34 <i id="9" class="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
            </div>
        </div>
        <div class="songBanner"></div>
    </div>
</div>
 );
}
 
export default Artist;