// <<<<<<< HEAD
import React, { useEffect,useState } from "react";
import one from "../../images/10.jpg";
import './artist.css'
import { useParams } from "react-router-dom";
import axios from "axios";

// /*import React from "react";
// import one from "../../images/10.jpg";
import './artist.css';

const Artist = () => {
    const [data,setData] = useState([])
    const [userdata,setUserdata] = useState('')
    const val = useParams()
    const [currentSong, setCurrentSong] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() =>{
    const storedUsername = localStorage.getItem('data-username')
    // const storedemail = localStorage.getItem('data-email')
    // const storedphone = localStorage.getItem('data-phone')
    if (storedUsername){
        setUserdata(storedUsername)
        // setuserPhone(storedphone)
        // setuseremail(storedemail)
    }

},[])
  const addsongHandler = (props) =>{
    
    const id = props.id 
    const username = userdata 
    console.log(userdata)
    console.log(id)
    axios.post('http://localhost:5000/addsong',{id,username})
        .then(res=>console.log(res))
        .catch(err =>console.log(err))
  }
 
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
       <nav className='artist-nav'>
        <ul>
            {/* <li class="brand">Spotify</li> */}
            <li>Home</li>
            <li>About</li>
        </ul>
    </nav>
    <div class="artist-container" >
      <div className='songList'>
        <h1 className='artist-name-style'>{val.name.toUpperCase()}</h1>
          {data.map((song) =>(
            (
              <div className='artist-songItemContainer' onClick={() => addsongHandler({id:song.song_id})}
              >
                <div className='artist-songItem'>
                <img src={song.img} alt="alan" className='song-image-box'/>
                <span class="songName">{song.song_name}</span>
                    <span class="songlistplay">
                        <span class="timestamp">05:34{" "}
                         <i id="0" 
                          
                         className={
                             currentSong === song.song_name && isPlaying 
                                 ? "fas songItemPlay fa-pause-circle" 
                                 : "far songItemPlay fa-play-circle"
                         } 
                         onClick={()=>playSong(song.song_name)}
                         ></i> 
                        </span>
                    </span>
                </div>
                </div>
            )
          ))}
      </div>
        </div>
       
         <div className="artist-bottom" style={{height:'0' , visibility:'hidden'}}>
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

    )
           }

export default Artist ;





  