import React from "react";
import Alan from "../../images/alan.jpg";
import Arijit from "../../images/arjit.jpg";
// import Weeknd from "../images/album-cover-1.jpeg.jpg";
import Weeknd from "../../images/1.jpg";
import Vande from "../../images/26th.jpg";
import one from "../../images/1.jpg"
import atif from "../../images/atif.jpg"
import akhil from "../../images/akhil.jpg"
import dhvani from "../../images/dhvani.jpg"
import guru from "../../images/guru.jpg"
import diljit from "../../images/Diljit_Dosanjh.jpg"
import honey from "../../images/honey.jpg"
import jubin from "../../images/jubin Nautiyal.jpg"
import neha from "../../images/neha.jpg"
import justin from "../../images/justin-bieber-lede.jpg"
import two_six from "../../images/26th.jpg"
import './Main.css'

const Main = () => {
    return ( 
<header id="header-song-side">
    <div class="song_side">
        <nav>
            <ul>
                <li>Discover <span></span></li>
                <li>MY LIBRARY</li>
                <li>RADIO</li>
            </ul>
            <div class="search">
                <i class="bi bi-search"></i>
                <input type="text" placeholder="Search Music..." />
            </div>
            <div class="user">
                <img src="img/KDS CODER.png" alt="User" title="KDS CODER (Jahid Khan)" />
            </div>
        </nav>
        <div class="content">
            <h1>Alen Walker-Fade</h1>
            <p>
                You were the shadow to my light Did you feel us Another start You fade 
                <br />
                Away afraid our aim is out of sight Wanna see us Alive
            </p>
            <div class="buttons">
                <button>PLAY</button>
                <button>FOLLOW</button>
            </div>
        </div>
        <div class="popular_song">
            <div class="h4">
                <h4>Popular Song</h4>
                <div class="btn_s">
                    <i id="left_scroll" class="bi bi-arrow-left-short"></i>
                    <i id="right_scroll" class="bi bi-arrow-right-short"></i>
                </div>
            </div>
            <div class="pop_song">
                <li class="songItem">
                    <div class="img_play">
                        <img src={one} alt="alan" />
                        <i class="bi playListPlay bi-play-circle-fill" id="7"></i>
                    </div>
                    <h5>On My Way
                        <br />
                        <div class="subtitle">Alan Walker</div>
                    </h5>
                </li>
                <li class="songItem">
                    <div class="img_play">
                        <img src={one} alt="alan" />
                        <i class="bi playListPlay bi-play-circle-fill" id="8"></i>
                        {/* <!-- change All id  --> */}
                    </div>
                    <h5>On My Way
                        <br />
                        <div class="subtitle">Alan Walker</div>
                    </h5>
                </li>
                <li class="songItem">
                    <div class="img_play">
                        <img src={one} alt="alan" />
                        <i class="bi playListPlay bi-play-circle-fill" id="9"></i>
                    </div>
                    <h5>On My Way
                        <br />
                        <div class="subtitle">Alan Walker</div>
                    </h5>
                </li>
                <li class="songItem">
                    <div class="img_play">
                        <img src={one} alt="alan"/>
                        <i class="bi playListPlay bi-play-circle-fill" id="10"></i>
                    </div>
                    <h5>On My Way
                        <br />
                        <div class="subtitle">Alan Walker</div>
                    </h5>
                </li>
                <li class="songItem">
                    <div class="img_play">
                        <img src={one} alt="alan" />
                        <i class="bi playListPlay bi-play-circle-fill" id="11"></i>
                    </div>
                    <h5>On My Way
                        <br />
                        <div class="subtitle">Alan Walker</div>
                    </h5>
                </li>
                <li class="songItem">
                    <div class="img_play">
                        <img src={one} alt="alan" />
                        <i class="bi playListPlay bi-play-circle-fill" id="12"></i>
                    </div>
                    <h5>On My Way
                        <br />
                        <div class="subtitle">Alan Walker</div>
                    </h5>
                </li>
                <li class="songItem">
                    <div class="img_play">
                        <img src={one} alt="alan" />
                        <i class="bi playListPlay bi-play-circle-fill" id="13"></i>
                    </div>
                    <h5>On My Way
                        <br />
                        <div class="subtitle">Alan Walker</div>
                    </h5>
                </li>
                <li class="songItem">
                    <div class="img_play">
                        <img src={one} alt="alan" />
                        <i class="bi playListPlay bi-play-circle-fill" id="14"></i>
                    </div>
                    <h5>On My Way
                        <br />
                        <div class="subtitle">Alan Walker</div>
                    </h5>
                </li>
                <li class="songItem">
                    <div class="img_play">
                        <img src={one} alt="alan" />
                        <i class="bi playListPlay bi-play-circle-fill" id="15"></i>
                    </div>
                    <h5>On My Way
                        <br />
                        <div class="subtitle">Alan Walker</div>
                    </h5>
                </li>
            </div>
        </div>
        <div class="popular_artists">
            <div class="h4">
                <h4>Popular Artists</h4>
                <div class="btn_s">
                    <i id="left_scrolls" class="bi bi-arrow-left-short"></i>
                    <i id="right_scrolls" class="bi bi-arrow-right-short"></i>
                </div>
            </div>
            <div class="item">
                <li>
                    <img src={Arijit} alt="Arjit Singh" title="Arjit Singh" />
                </li>
                <li>
                    <img src={Alan} alt="Alan Walker" title="Alan Walker" />
                </li>
                <li>
                    <img src={atif} alt="Atif Aslam" title="Atif Aslam" />
                </li>
                <li>
                    <img src={guru} alt="Guru RAndawa" title="Guru Randawa" />
                </li>
                <li>
                    <img src={dhvani} alt="Dhvani" title="Dhvani" />
                </li>
                <li>
                    <img src={diljit} alt="Diljit Dosanjh" title="Diljit Dosanjh" />
                </li>
                <li>
                    <img src={jubin} alt="Jubin Nautiyal" title="Jubin Nautiyal" />
                </li>
                <li>
                    <img src={neha} alt="Neha Kakker" title="Neha Kakker" />
                </li>
                <li>
                    <img src={justin} alt="Justin Bieber" title="Justin Bieber" />
                </li>
                <li>
                    <img src={honey} alt="Honey Singh" title="Honey Singh" />
                </li>
                <li>
                    <img src={akhil} alt="Akhil" title="Akhil" />
                </li>
                {/* <!-- change all img  --> */}
            </div>
        </div>
    </div>


    <div class="master_play">
        <div class="wave">
            <div class="wave1"></div>
            <div class="wave1"></div>
            <div class="wave1"></div>
        </div>
        <img src={two_six} alt="Alan" id="poster_master_play" />
        <h5 id="title">Vande Mataram<br />
            <div class="subtitle">Bankim Chandra</div>
        </h5>
        <div class="icon">
            <i class="bi bi-skip-start-fill" id="back"></i>
            <i class="bi bi-play-fill" id="masterPlay"></i>
            <i class="bi bi-skip-end-fill" id="next"></i>
        </div>
        <span id="currentStart">0:00</span>
        <div class="bar">
            <input type="range" id="seek" min="0" value="0" max="100" />
            <div class="bar2" id="bar2"></div>
            <div class="dot"></div>
        </div>
        <span id="currentEnd">0:00</span>

        <div class="vol">
            <i class="bi bi-volume-down-fill" id="vol_icon"></i>
            <input type="range" id="vol" min="0" value="30" max="100" />
            <div class="vol_bar"></div>
            <div class="dot" id="vol_dot"></div>
        </div>
    </div>
</header>

 );
}
 
export default Main;