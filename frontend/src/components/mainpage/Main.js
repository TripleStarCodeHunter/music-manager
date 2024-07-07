import React from "react";
import "./Main.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SongsComponent from "../songs/songsComponent";
import ArtistComponent from "../artist/artistComponent";
const Main = () => {
  const [userdata, setUserdata] = useState("");
  const [username, setUsername] = useState("");
//   };
  useEffect(() => {
    const storedUsername = localStorage.getItem("data-username");
    if (storedUsername) {
      setUserdata(storedUsername);
    }
    console.log(username);
  }, []);

  return (
    <div className="main-background">
      <header id="header-song-side">
        <div class="main-menu-song_side">
          <nav>
            <ul>
              <li>
                Discover <span></span>
              </li>
              <li>MY LIBRARY</li>
              <li>RADIO</li>
            </ul>
            <div class="search">
              <i class="bi bi-search"></i>
              <input type="text" placeholder="Search Music..." />
            </div>
          </nav>
          <div class="content">
            <h1>Hello {userdata}</h1>
            <h1>Alan Walker-Faded</h1>
            <p>
              You were the shadow to my light Did you feel us Another start You
              fade
              <br />
              Away afraid our aim is out of sight Wanna see us Alive
            </p>
            <div class="buttons">
              <button>PLAY</button>
              <button>FOLLOW</button>
            </div>
          </div>
         <SongsComponent />
         <ArtistComponent />
        </div>        
      </header>
    </div>
  );
};

export default Main;
