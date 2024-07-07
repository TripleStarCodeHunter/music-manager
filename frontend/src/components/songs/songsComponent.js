import React from "react";
import { useState, useEffect } from "react";

const SongsComponent = () => {
  const [songsData, setSongsData] = useState([]);
  const [userdata, setUserdata] = useState("");
  const [username, setUsername] = useState("");
  const addsonghadnler = (props) => {
    console.log(userdata);
    console.log(props.id);
    const username = userdata;
    const songId = props.id;
    fetch(
      `http://localhost:5000/insertPlaylist?username=${username}&songId=${songId}`
    )
      .then((response) => response.json())
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetch("http://localhost:5000/getSongs")
      .then((response) => response.json())
      .then((data) => setSongsData(data))
      .catch((error) => console.log(error));

    let left_scroll = document.getElementById("left_scroll");
    let right_scroll = document.getElementById("right_scroll");
    let pop_song = document.getElementsByClassName("pop_song")[0];

    left_scroll.addEventListener("click", () => {
      pop_song.scrollLeft -= 330;
    });
    right_scroll.addEventListener("click", () => {
      pop_song.scrollLeft += 330;
    });
  }, []);
  return (
    <div class="popular_song">
      <div class="h4">
        <h4>Popular Song</h4>
        <div class="btn_s">
          <i id="left_scroll" class="bi bi-arrow-left-short"></i>
          <i id="right_scroll" class="bi bi-arrow-right-short"></i>
        </div>
      </div>
      <div class="pop_song">
        {songsData.map((data) => (
          <li
            className="songItem"
            key={data.song_id}
            onClick={() => addsonghadnler({ id: data.song_id })}
          >
            <div className="img_play">
              <img src={data.img} alt={data.artist_name} />{" "}
              {/* Use imported image */}
              <i
                className="bi playListPlay bi-play-circle-fill"
                id={data.song_id}
              ></i>
            </div>
            <h5>
              {data.song_name}
              <br />
              <div className="subtitle">{data.artist_name}</div>
            </h5>
          </li>
        ))}
      </div>
    </div>
  );
};

export default SongsComponent;
