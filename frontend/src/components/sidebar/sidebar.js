import './sidebar.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useEffect,useState } from 'react';

const SideBar= ()=>{
    const [username, setUsername] = useState('');
    const [playlist, setPlaylist] = useState([]);
    useEffect(() => {
        const storedUsername = localStorage.getItem('data-username');
        if (storedUsername) {
          setUsername(storedUsername);
        }
      }, []);
      
      const fetchPlaylist = () => {
        fetch(`http://localhost:5000/getPlaylist?username=${username}`)
          .then(response => response.json())
          .then(data => setPlaylist(data))
          .catch(error => console.log(error));
      }
      
      useEffect(() => {
        if (username) {
          fetchPlaylist();
        }
      }, [username]);

      const handleDelete = (songId) => {
        
          fetch(`http://localhost:5000/deletePlaylist?username=${username}&songId=${songId}`,
          {method:'DELETE'})
            .then(response => response.json())
            .catch(error => console.log(error));
        
        const newPlaylist = playlist.filter((song) => song.song_id !== songId);
        setPlaylist(newPlaylist);
      };
      
    return(
        <header id="header-side-bar">
    <div className="sidebar-menu_side">
        <h1>Playlist</h1>
        <div className="sidebar-playlist">
            <h4 className="active"><span></span><i className="bi bi-music-note-beamed"></i> Playlist</h4>
            <h4 ><span></span><i className="bi bi-music-note-beamed"></i> Last Listening</h4>
            <h4 ><span></span><i className="bi bi-music-note-beamed"></i> Recommended</h4>
        </div>
        <div className="menu_song">
            {playlist.length>0 && playlist.map((song, index) => (
              <li className="songItem" key={song.song_id}>
                <span>{index + 1}</span>
                <img src={song.img} alt="" />
                <h5>
                  {song.song_name}
                  <div className="subtitle">{song.artistName}</div>
                </h5>
                <i className="bi playListPlay bi-play-circle-fill" id={song.id}></i>
                <button className='delete-button' onClick={() => handleDelete(song.song_id)}>Delete</button>
              </li>
            ))}
        </div>
    </div>
</header>
    );
}
export default SideBar