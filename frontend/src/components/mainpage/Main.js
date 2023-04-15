import React from "react";
import Alan from "../../images/alan.jpg";
import Arijit from "../../images/arjit.jpg";
// import Weeknd from "../images/album-cover-1.jpeg.jpg";
import Weeknd from "../../images/1.jpg";
import Vande from "../../images/26th.jpg";
import "./Main.css"

const Main = () => {
    return ( 
        <header>
<div className="main-page-background">
    <div className="menu_side">
        <h1>Playlist</h1>
        <div className="playlist">
            <h4 className="active"><span></span><i className="bi bi-music-note-beamed"></i> Playlist</h4>
            <h4 ><span></span><i className="bi bi-music-note-beamed"></i> Last Listening</h4>
            <h4 ><span></span><i className="bi bi-music-note-beamed"></i> Recommended</h4>
        </div>
        <div className="menu_song">
            <li className="songItem">
                <span>01</span>
                <img src= {Alan} alt=""/>
                <h5>
                    On My Way
                    <div className="subtitle">Alan Walker</div>
                </h5>
                    <i className="bi playListPlay bi-play-circle-fill" id="1"></i>
            </li>
            <li className="songItem">
                <span>02</span>
                <img src= {Alan} alt="" />
                <h5>
                    On My Way
                    <div className="subtitle">Alan Walker</div>
                </h5>
                    <i className="bi playListPlay bi-play-circle-fill" id="2"></i>
            </li>
            <li className="songItem">
                <span>03</span>
                <img src= {Alan} alt=""/>
                <h5>
                    On My Way
                    <div className="subtitle">Alan Walker</div>
                </h5>
                    <i className="bi playListPlay bi-play-circle-fill" id="3"></i>
            </li>
            <li className="songItem">
                <span>04</span>
                <img src= {Alan} alt=""/>
                <h5>
                    On My Way
                    <div className="subtitle">Alan Walker</div>
                </h5>
                    <i className="bi playListPlay bi-play-circle-fill" id="4"></i>
            </li>
            <li className="songItem">
                <span>05</span>
                <img src= {Alan} alt=""/>
                <h5>
                    On My Way
                    <div className="subtitle">Alan Walker</div>
                </h5>
                    <i className="bi playListPlay bi-play-circle-fill" id="5"></i>
            </li>
            <li className="songItem">
                <span>06</span>
                <img src= {Alan} alt=""/>
                <h5>
                    On My Way
                    <div className="subtitle">Alan Walker</div>
                </h5>
                    <i className="bi playListPlay bi-play-circle-fill" id="6"></i>
            </li>
        </div>
    </div>


    <div className="song_side">
        <nav>
            <ul>
                <li>Discover <span></span></li>
                <li>MY LIBRARY</li>
            </ul>
            <div className="search">
                <i className="bi bi-search"></i>
                <input type="text" placeholder="Search Music..." />
            </div>
            <div className="user">
            <img src= {Arijit} alt=""/>
            </div>
        </nav>
        <div className="content">
            <h1>Alan Walker</h1>
            <p>
                You were the shadow to my light Did you feel us Another start You fade 
                <br/>
                Away afraid our aim is out of sight Wanna see us Alive
            </p>
            <div className="buttons">
                <button>PLAY</button>
                <button>FOLLOW</button>
            </div>
        </div>
        <div className="popular_song">
            <div className="h4">
                <h4>Popular Song</h4>
                <div className="btn_s">
                    <i id="left_scroll" className="bi bi-arrow-left-short"></i>
                    <i id="right_scroll" className="bi bi-arrow-right-short"></i>
                </div>
            </div>
            <div className="pop_song">
                <li className="songItem">
                    <div className="img_play">
                        <img src= {Alan} alt=""/>
                        <i className="bi playListPlay bi-play-circle-fill" id="7"></i>
                    </div>
                    <h5>On My Way
                        <br/>
                        <div className="subtitle">Alan Walker</div>
                    </h5>
                </li>
                <li className="songItem">
                    <div className="img_play">
                    <img src= {Weeknd} alt=""/>
                        <i className="bi playListPlay bi-play-circle-fill" id="8"></i>
                    </div>
                    <h5>After Hours<br/><div className="subtitle">The Weeknd</div></h5>
                </li>
                <li className="songItem">
                    <div className="img_play">
                    <img src= {Weeknd} alt=""/>
                        <i className="bi playListPlay bi-play-circle-fill" id="9"></i>
                    </div>
                    <h5>Future Nostilga<br/><div className="subtitle">Dua Lipa</div></h5>
                </li>
                <li className="songItem">
                    <div className="img_play">
                    <img src= {Weeknd} alt=""/>
                        <i className="bi playListPlay bi-play-circle-fill" id="10"></i>
                    </div>
                    <h5>Nazi<br/><div className="subtitle">KanYe West</div></h5>
                </li>
                <li className="songItem">
                    <div className="img_play">
                    <img src= {Weeknd} alt=""/>
                        <i className="bi playListPlay bi-play-circle-fill" id="11"></i>
                    </div>
                    <h5>Her Loss<br/><div className="subtitle">Drake</div></h5>
                </li>
                <li className="songItem">
                    <div className="img_play">
                    <img src= {Weeknd} alt=""/>
                        <i className="bi playListPlay bi-play-circle-fill" id="12"></i>
                    </div>
                    <h5>Revolver<br/><div className="subtitle">Madonna</div></h5>
                </li>
                <li className="songItem">
                    <div className="img_play">
                    <img src= {Weeknd} alt=""/>
                        <i className="bi playListPlay bi-play-circle-fill" id="13"></i>
                    </div>
                    <h5>Bohemian Rhapsody<br/><div className="subtitle">Queen</div></h5>
                </li>
                <li className="songItem">
                    <div className="img_play">
                    <img src= {Weeknd} alt=""/>
                        <i className="bi playListPlay bi-play-circle-fill" id="14"></i>
                    </div>
                    <h5>IGOR<br/><div className="subtitle">Tyler The Creator</div></h5>
                </li>
                <li className="songItem">
                    <div className="img_play">
                    <img src= {Weeknd} alt=""/>
                        <i className="bi playListPlay bi-play-circle-fill" id="15"></i>
                    </div>
                    <h5>AstroWorld<br/><div className="subtitle">Travis Scott</div></h5>
                </li>
            </div>
        </div>
        <div className="popular_artists">
            <div className="h4">
                <h4>Popular Artists</h4>
                <div className="btn_s">
                    <i id="left_scrolls" className="bi bi-arrow-left-short"></i>
                    <i id="right_scrolls" className="bi bi-arrow-right-short"></i>
                </div>
            </div>
            <div className="item">
                <li>
                <img src= {Arijit} alt=""/>
                </li>
                <li>
                <img src= {Arijit} alt=""/>
                </li>
                <li>
                <img src= {Arijit} alt=""/>
                </li>
                <li>
                <img src= {Arijit} alt=""/>
                </li>
                <li>
                <img src= {Arijit} alt=""/>
                </li>
                <li>
                <img src= {Arijit} alt=""/>
                </li>
                <li>
                <img src= {Arijit} alt=""/>
                </li>
                <li>
                <img src= {Arijit} alt=""/>
                </li>
                <li>
                <img src= {Arijit} alt=""/>
                </li>
                <li>
                <img src= {Arijit} alt=""/>
                </li>
                <li>
                <img src= {Arijit} alt=""/>
                </li>
            </div>
        </div>
    </div>


    <div className="master_play">
        <div className="wave">
            <div className="wave1"></div>
            <div className="wave1"></div>
            <div className="wave1"></div>
        </div>
        <img src= {Vande} alt=""/>
        <h5 id="title">Vande Mataram<br/>
            <div className="subtitle">Bankim Chandra</div>
        </h5>
        <div className="icon">
            <i className="bi bi-skip-start-fill" id="back"></i>
            <i className="bi bi-play-fill" id="masterPlay"></i>
            <i className="bi bi-skip-end-fill" id="next"></i>
        </div>
        <span id="currentStart">0:00</span>
        <div className="bar">
            <input type="range" id="seek" min="0" value="0" max="100" />
            <div className="bar2" id="bar2"></div>
            <div className="dot"></div>
        </div>
        <span id="currentEnd">0:00</span>

        <div className="vol">
            <i className="bi bi-volume-down-fill" id="vol_icon"></i>
            <input type="range" id="vol" min="0" value="30" max="100" />
            <div className="vol_bar"></div>
            <div className="dot" id="vol_dot"></div>
        </div>
    </div>

</div>
</header>

 );
}
 
export default Main;