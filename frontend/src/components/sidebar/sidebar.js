import 'sidebar.css'
const SideBar= ()=>{
    return(
        <header>
    <div class="menu_side">
        <h1>Playlist</h1>
        <div className="playlist">
            <h4 class="active"><span></span><i class="bi bi-music-note-beamed"></i> Playlist</h4>
            <h4 ><span></span><i class="bi bi-music-note-beamed"></i> Last Listening</h4>
            <h4 ><span></span><i class="bi bi-music-note-beamed"></i> Recommended</h4>
        </div>
        <div className="menu_song">
            <li className="songItem">
                <span>01</span>
                <img src="img/1.jpg" alt="Alan"/>
                <h5>
                    On My Way
                    <div className="subtitle">Alan Walker</div>
                </h5>
                    <i className="bi playListPlay bi-play-circle-fill" id="1"></i>
            </li>
            <li className="songItem">
                <span>02</span>
                <img src="img/1.jpg" alt="Alan" />
                <h5>
                    On My Way
                    <div className="subtitle">Alan Walker</div>
                </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="2"></i>
            </li>
            <li class="songItem">
                <span>03</span>
                <img src="img/1.jpg" alt="Alan" />
                <h5>
                    On My Way
                    <div class="subtitle">Alan Walker</div>
                </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="3"></i>
            </li>
            <li class="songItem">
                <span>04</span>
                <img src="img/1.jpg" alt="Alan" />
                <h5>
                    On My Way
                    <div class="subtitle">Alan Walker</div>
                </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="4"></i>
            </li>
            <li class="songItem">
                <span>05</span>
                <img src="img/1.jpg" alt="Alan" />
                <h5>
                    On My Way
                    <div class="subtitle">Alan Walker</div>
                </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="5"></i>
            </li>
            <li class="songItem">
                <span>06</span>
                <img src="img/1.jpg" alt="Alan" />
                <h5>
                    On My Way
                    <div class="subtitle">Alan Walker</div>
                </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="6"></i>
            </li>
        </div>
    </div>


    
</header>
    );
}
export default SideBar