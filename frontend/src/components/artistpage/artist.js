import React from "react";
import one from "../../img/10.jpg";
import './artist.css'

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

    <div class="container">
        <div class="songList">
            <h1>The Weeknd</h1>
            <div class="songItemContainer">
                <div class="songItem">
                    <img src={one} alt="alan" />
                    <span class="songName">Save Your Tears</span>
                    <span class="songlistplay"><span class="timestamp">05:34 <i id="0" class="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
                <div class="songItem">
                    <img src={one} alt="alan" />
                    <span class="songName">Save Your Tears</span>
                    <span class="songlistplay"><span class="timestamp">05:34 <i id="1" class="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
                <div class="songItem">
                    <img src={one} alt="alan" />
                    <span class="songName">Save Your Tears</span>
                    <span class="songlistplay"><span class="timestamp">05:34 <i id="2" class="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
                <div class="songItem">
                    <img src={one} alt="alan" />
                    <span class="songName">Save Your Tears</span>
                    <span class="songlistplay"><span class="timestamp">05:34 <i id="3" class="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
                <div class="songItem">
                    <img src={one} alt="alan" />
                    <span class="songName">Save Your Tears</span>
                    <span class="songlistplay"><span class="timestamp">05:34 <i id="4" class="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
                <div class="songItem">
                    <img src={one} alt="alan" />
                    <span class="songName">Save Your Tears</span>
                    <span class="songlistplay"><span class="timestamp">05:34 <i id="5" class="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
                <div class="songItem">
                    <img src={one} alt="alan" />
                    <span class="songName">Save Your Tears</span>
                    <span class="songlistplay"><span class="timestamp">05:34 <i id="6" class="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
                <div class="songItem">
                    <img src={one} alt="alan" />
                    <span class="songName">Save Your Tears</span>
                    <span class="songlistplay"><span class="timestamp">05:34 <i id="7" class="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
                <div class="songItem">
                    <img src={one} alt="alan" />
                    <span class="songName">Save Your Tears</span>
                    <span class="songlistplay"><span class="timestamp">05:34 <i id="8" class="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
                <div class="songItem">
                    <img src={one} alt="alan" />
                    <span class="songName">Save Your Tears</span>
                    <span class="songlistplay"><span class="timestamp">05:34 <i id="9" class="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
            </div>
        </div>
        <div class="songBanner"></div>
    </div>

    <div class="bottom">
        <input type="range" name="range" id="myProgressBar" min="0" value="0" max="100" />
        <div class="icons">
            
            <i class="fas fa-3x fa-step-backward" id="previous"></i>
            <i class="far fa-3x fa-play-circle" id="masterPlay"></i>
            <i class="fas fa-3x fa-step-forward" id="next"></i> 
        </div>
        <div class="songInfo">
        <img src={one} alt="alan" /> <span id="masterSongName">Warriyo - Mortals [NCS Release]</span>
        </div>
    </div>
</div>
 );
}
 
export default Artist;