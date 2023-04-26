/*import React from "react";
import one from "../../images/10.jpg";
import './artist.css';
const Artist = () => {
    return ( 
<div className="artist-background">
    
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
 
export default Artist;*/
import one from "../../images/10.jpg";
import './artist.css';
import React, { useState } from "react";

function Artist() {
  const [currentSong, setCurrentSong] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const playSong = (songName) => {
    if (songName === currentSong && isPlaying) {
      setIsPlaying(false);
    } else {
      setCurrentSong(songName);
      setIsPlaying(true);
    }
  };

  const handleProgressChange = (event) => {
    setProgress(parseInt(event.target.value));
  };

  return (
    <div className="artist-background">
      <nav className="artist-nav">
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
      </nav>

      <div className="artist-container">
        <div className="songList">
          <h1>Justin Bieber</h1>
          <div className="artist-songItemContainer">
            <div className="artist-songItem">
            <img alt="1" />
              <span className="songName">Let me Love You</span>
              <span className="songlistplay">
                <span className="timestamp">
                  05:34{" "}
                  <i
                    id="0"
                    className={
                      currentSong === "Let me Love You" && isPlaying
                        ? "fas songItemPlay fa-pause-circle"
                        : "far songItemPlay fa-play-circle"
                    }
                    onClick={() => playSong("Let me Love You")}
                  ></i>{" "}
                </span>
              </span>
            </div>

            <div className="artist-songItem">
              <img alt="1" />
              <span className="songName">Let me Love You</span>
              <span className="songlistplay">
                <span className="timestamp">
                  05:34{" "}
                  <i
                    id="9"
                    className={
                      currentSong === "Let me Love You" && isPlaying
                        ? "fas songItemPlay fa-pause-circle"
                        : "far songItemPlay fa-play-circle"
                    }
                    onClick={() => playSong("Let me Love You")}
                  ></i>{" "}
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="songBanner"></div>
      </div>

      <div className="artist-bottom" style={{height:"0",visibility:"hidden"}}>
        <input
          type="range"
          name="range"
          id="myProgressBar"
          min="0"
          value={progress}
          max="100"
          onChange={handleProgressChange}
        />
        
      </div>
    </div>
  );
}

export default Artist;