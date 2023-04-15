import './sidebar.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Alan from "../../images/alan.jpg";
import Arijit from "../../images/arjit.jpg";
// import Weeknd from "../images/album-cover-1.jpeg.jpg";
import Weeknd from "../../images/1.jpg";
import Vande from "../../images/26th.jpg";

const SideBar= ()=>{
    return(
        <header id="header-side-bar">
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
</header>
    );
}
export default SideBar