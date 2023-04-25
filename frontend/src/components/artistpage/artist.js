import React from "react";
import one from "../../images/10.jpg";
import './artist.css';

const Artist = () => {
    return ( 
        <body className="flex flex-col w-full h-full font-sans">
          <div className="relative flex justify-center">
            <div className="hidden bg-black md:w-1/3 md:block px-6 py-4 h-full fixed left-0">
              <button className="text-gray-200 hover:text-white flex items-center mt-4">
                <svg className="mr-4" viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M 256.274 60.84 L 84.324 166.237 L 84.324 443.063 L 193.27 443.063 L 193.27 293.73 L 320.228 293.73 L 320.228 443.063 L 428.222 443.063 L 428.222 165.476 L 256.274 60.84 Z M 256.274 35.95 L 448.452 149.145 L 448.452 464.395 L 300 464.395 L 300 315.062 L 213.499 315.062 L 213.499 464.395 L 64.095 464.395 L 64.095 150.161 L 256.274 35.95 Z"
                    fill="currentColor"></path>
                </svg>
                <a className="text-gray-300 text-sm font-bold hover:text-white capitalize">Home</a>
              </button>
        
              <div className="mt-10 mb-3 border-b border-gray-700">
                <button className="flex items-center text-black">
                  <svg className="fill-current bg-gray-200 hover:bg-white mr-4 p-1 Svg-ulyrgf-0 hJgLcF" role="img" height="24" width="24"
                    viewBox="0 0 16 16">
                    <path d="M14 7H9V2H7v5H2v2h5v5h2V9h5z"></path>
                    <path fill="none" d="M0 0h16v16H0z"></path>
                  </svg>
                  <a className="text-gray-300 text-sm font-bold hover:text-white capitalize">Create Playlist</a>
                </button>
                <br />
              </div>
              <div className="overflow-y-auto h-40 mb-2">
                <ul id="sidebar-playlist" className="text-gray-400 font-semi-bold text-sm capitalize"></ul>
              </div>
        
            </div>
            <div className="w-full md:w-5/6 md:absolute md:right-0" style={{backgroundColor: "#0a2482"}}>
              <div className="p-6" style={{background: "linear-gradient(transparent, #00000080)"}}>
                <div className="hidden flex justify-between md:flex">
                  <div className="flex">
                    <svg className="bg-black rounded-full bg-opacity-60 p-1 Svg-sc-1usfroi-0 jUuLJy _6fe5d5efc9b4a07d5c424071ac7cdacb-scss" role="img" focusable="false" height="32" width="32"
                      viewBox="0 0 24 24">
                      <polyline points="16 4 7 12 16 20" fill="none" stroke="#fff"></polyline>
                    </svg>
                    <svg className="bg-black rounded-full bg-opacity-80 p-1 ml-4 Svg-sc-1usfroi-0 jUuLJy _6fe5d5efc9b4a07d5c424071ac7cdacb-scss" role="img" focusable="false" height="32"
                      width="32" viewBox="0 0 24 24" >
                      <polyline points="8 4 17 12 8 20" fill="none" stroke="#fff"></polyline>
                    </svg>
                  </div>
                  <div className="flex items-center">
                    <button type="button"
                      className="text-white uppercase text-xs font-extrabold text-opacity-90 tracking-widest bg-black bg-opacity-70 border border-gray-300 rounded-full px-8 py-2 mr-6 hover:bg-black">
                      Premium
                    </button>
                    <button type="button"
                      className="text-white capitalize text-sm font-bold bg-black rounded-full px-1 py-1 flex items-center bg-opacity-80 hover:bg-gray-800">
                      <svg className="bg-gray-800 rounded-full p-1 border border-gray-700" width="24" height="24"
                        fill="currentColor" viewBox="0 0 18 20" xmlns="http://www.w3.org/2000/svg" data-testid="user-icon">
                        <path
                          d="M15.216 13.717L12 11.869C11.823 11.768 11.772 11.607 11.757 11.521C11.742 11.435 11.737 11.267 11.869 11.111L13.18 9.57401C14.031 8.58001 14.5 7.31101 14.5 6.00001V5.50001C14.5 3.98501 13.866 2.52301 12.761 1.48601C11.64 0.435011 10.173 -0.0879888 8.636 0.0110112C5.756 0.198011 3.501 2.68401 3.501 5.67101V6.00001C3.501 7.31101 3.97 8.58001 4.82 9.57401L6.131 11.111C6.264 11.266 6.258 11.434 6.243 11.521C6.228 11.607 6.177 11.768 5.999 11.869L2.786 13.716C1.067 14.692 0 16.526 0 18.501V20H1V18.501C1 16.885 1.874 15.385 3.283 14.584L6.498 12.736C6.886 12.513 7.152 12.132 7.228 11.691C7.304 11.251 7.182 10.802 6.891 10.462L5.579 8.92501C4.883 8.11101 4.499 7.07201 4.499 6.00001V5.67101C4.499 3.21001 6.344 1.16201 8.699 1.00901C9.961 0.928011 11.159 1.35601 12.076 2.21501C12.994 3.07601 13.5 4.24301 13.5 5.50001V6.00001C13.5 7.07201 13.117 8.11101 12.42 8.92501L11.109 10.462C10.819 10.803 10.696 11.251 10.772 11.691C10.849 12.132 11.115 12.513 11.503 12.736L14.721 14.585C16.127 15.384 17.001 16.884 17.001 18.501V20H18.001V18.501C18 16.526 16.932 14.692 15.216 13.717Z">
                        </path>
                      </svg>
                      <svg className="fill-current Svg-ulyrgf-0 hJgLcF f6406a56d35aea2a3598f6f270ef156c-scss" role="img" height="16" width="16"
                        viewBox="0 0 16 16">
                        <path d="M3 6l5 5.794L13 6z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="hidden mt-8 flex items-center md:flex">
                  <img id="playlist-thumbnail" src="images/the_weeknd.webp" alt="Weeknd artist" className="w-56 h-56 mr-6"
                    style={{boxShadow: "0 4px 60px #00000080"}} />
                  <div className="mt-16">
                    <h2 className="text-gray-50 uppercase text-xs font-bold tracking-tighter mt-1">
                      Playlist
                    </h2>
                    <span className="text-white text-6xl capitalize font-extrabold tracking-tighter">
                      <h1 id="playlist-title">Weeknd</h1>
                    </span>
                    <p id="playlist-description" className="text-white mt-6 text-sm font-normal leading-none opacity-70">
                      The Only Weeknd playlist that you need.
                    </p>
                    <div className="flex items-center mt-2">
                      <a className="text-white font-bold text-sm hover:text-underline cursor-pointer">Spotify</a>
                      <div className="font-extrabold text-md text-white opacity-70 mx-1 mb-1 pb-1">
                        .
                      </div>
                      <p className="text-white opacity-70 font-normal text-sm mr-1">
                        5 songs,
                      </p>
                      <p className="text-white opacity-70 font-normal text-sm">
                        10 min
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full" style={{backgroundColor: "#121212"}}>
                <div className="w-full p-4" style={{
                      backgroundColor: "#0a2482",
                      backgroundImage: "linear-gradient(#00000099, #121212)",
                      zIndex: "-1"
                    }}>
                  <div className="flex justify-center items-center m-4 md:hidden">
                    <button
                      className="bg-green-500 text-white uppercase text-xs rounded-full font-semibold tracking-widest px-8 py-3">
                      Shuffle Play
                    </button>
                  </div>
                  <div className="hidden flex items-center text-white w-1/2 mx-4 my-6 md:flex"
                    style={{backgroundColor: "transparent"}}>
                    <svg className="bg-green-500 rounded-full w-12 h-12 p-3 text-white" height="28" role="img" width="28"
                      viewBox="0 0 24 24" aria-hidden="true">
                      <polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor"></polygon>
                    </svg>
                    <div className="text-green-500">
                      <svg className="mx-4 my-2 fill-current Svg-ulyrgf-0 hJgLcF" role="img" height="32" width="32" viewBox="0 0 32 32"
                        >
                        <path
                          d="M27.319 5.927a7.445 7.445 0 00-10.02-.462s-.545.469-1.299.469c-.775 0-1.299-.469-1.299-.469a7.445 7.445 0 00-10.02 10.993l9.266 10.848a2.7 2.7 0 004.106 0l9.266-10.848a7.447 7.447 0 000-10.531z">
                        </path>
                      </svg>
                    </div>
                    <div className="text-gray-300">
                      <svg className="fill-current Svg-ulyrgf-0 hJgLcF" role="img" height="32" width="32" viewBox="0 0 32 32"
                        >
                        <path
                          d="M5.998 13.999A2 2 0 105.999 18 2 2 0 005.998 14zm10.001 0A2 2 0 1016 18 2 2 0 0016 14zm10.001 0A2 2 0 1026.001 18 2 2 0 0026 14z">
                        </path>
                      </svg>
                    </div>
                  </div>
                  <div className="my-10 mx-2 h-72 overflow-y-auto md:h-full md:overflow-hidden">
                    <table className="w-full cursor-default">
                      <thead>
                        <tr
                          className="flex justify-around items-center text-gray-400 border-b border-gray-400 border-opacity-30 uppercase h-8">
                          <th className="text-md">
                            <span className="text-xs ml-2">Title</span>
                          </th>
                          <th className="text-xs">Album</th>
                          <th className="text-xs">Date Added</th>
                          <th className="">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path
                                d="M7.999 3H6.999V7V8H7.999H9.999V7H7.999V3ZM7.5 0C3.358 0 0 3.358 0 7.5C0 11.642 3.358 15 7.5 15C11.642 15 15 11.642 15 7.5C15 3.358 11.642 0 7.5 0ZM7.5 14C3.916 14 1 11.084 1 7.5C1 3.916 3.916 1 7.5 1C11.084 1 14 3.916 14 7.5C14 11.084 11.084 14 7.5 14Z"
                                fill="currentColor"></path>
                            </svg>
                          </th>
                        </tr>
                      </thead>
        
        
                      <tbody>
                        <tr
                          className="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2">
                          <td className="flex justify-center items-center">
                            <p className="mr-2">1</p>
                            <img src="images/jpg" alt="dead girl song poster" height="50px" width="50px" />
                            <div className="ml-3">
                              <p className="text-white font-semi-bold">Reminder</p>
                              <a className="text-xs text-gray-400 hover:text-white hover:cursor-pointer"><span>Weeknd</span></a>
                            </div>
                          </td>
                          <td className="text-sm">"Reminder</td>
                          <td className="text-sm">5 days ago</td>
                          <td className="text-sm">3:14</td>
                        </tr>
                        <tr
                          className="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2">
                          <td className="flex justify-center items-center">
                            <p className="mr-2">2</p>
                            <img src="images/jpg" alt="spectre song poster" height="50px" width="50px" />
                            <div className="ml-3">
                              <p className="text-white font-semi-bold">Starboy</p>
                              <a className="text-xs text-gray-400 hover:text-white hover:cursor-pointer"><span>Weeknd</span></a>
                            </div>
                          </td>
                          <td className="text-sm">Starboy</td>
                          <td className="text-sm">2 days ago</td>
                          <td className="text-sm">3:13</td>
                        </tr>
                        <tr
                          className="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2">
                          <td className="flex justify-center items-center">
                            <p className="mr-2">3</p>
                            <img src="images/faded.jpg" alt="faded song poster" height="50px" width="50px" />
                            <div className="ml-3">
                              <p className="text-white font-semi-bold">Blinding lights</p>
                              <a className="text-xs text-gray-400 hover:text-white hover:cursor-pointer"><span>Weeknd</span></a>
                            </div>
                          </td>
                          <td className="text-sm">Blinding lights</td>
                          <td className="text-sm">5 days ago</td>
                          <td className="text-sm">3:32</td>
                        </tr>
                        <tr
                          className="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2">
                          <td className="flex justify-center items-center">
                            <p className="mr-2">4</p>
                            <img src="images/play.jpg" alt="play song poster" height="50px" width="50px" />
                            <div className="ml-3">
                              <p className="text-white font-semi-bold">Save Your Tears</p>
                              <a className="text-xs text-gray-400 hover:text-white hover:cursor-pointer"><span>Weeknd</span></a>
                            </div>
                          </td>
                          <td className="text-sm">Save Your Tears</td>
                          <td className="text-sm">5 days ago</td>
                          <td className="text-sm">2:47</td>
                        </tr>
                        <tr
                          className="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2">
                          <td className="flex justify-center items-center">
                            <p className="mr-2">5</p>
                            <img src="images/sorry.jpg" alt="sorry song poster" height="50px" width="50px" />
                            <div className="ml-3">
                              <p className="text-white font-semi-bold">After Hours</p>
                              <a className="text-xs text-gray-400 hover:text-white hover:cursor-pointer"><span>Weeknd</span></a>
                            </div>
                          </td>
                          <td className="text-sm">After Hours</td>
                          <td className="text-sm">5 days ago</td>
                          <td className="text-sm">2:45</td>
                        </tr>
                        <tr
                          className="flex justify-around items-center text-gray-400 m-2 font-mono hover:bg-gray-200 hover:bg-opacity-10 rounded-md py-2">
                        </tr>
                      </tbody>
                    </table>
                  </div>
        
        
                      <div className="flex justify-between items-center my-6 md:hidden">
                    <button className="text-green-500">
                      <svg className="fill-current mr-4 Svg-ulyrgf-0 hJgLcF" role="img" height="24" width="24" viewBox="0 0 16 16"
                        >
                        <path fill="none" d="M0 0h16v16H0z"></path>
                        <path
                          d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z">
                        </path>
                      </svg>
                    </button>
                    <p className="text-white font-semibold text-sm tracking-wider">
                      Heading Home,
                      <span className="text-gray-300 font-semibold text-sm">Weeknd</span>
                    </p>
                  </div>
                  <div className="hidden fixed left-0 bottom-0 right-0 h-auto flex justify-between flex-row items-center md:flex"
                    style={{backgroundColor: "#181818", borderTop: "1px solid #282828"}}>
                    <div className="mx-4 my-4 flex justify-start items-center w-1/3">
                      <img src="images/back-to-beautiful.jpg" alt="error" className="shadow-2xl rounded-md" />
                      <div className="flex flex-col justify-center m-4">
                        <h5 id="song-name" className="text-white font-semi-bold text-sm text-left">
                          Reminder
                        </h5>
                        <p id="artist-name" className="text-gray-400 font-semi-bold text-xs">
                          Weeknd
                        </p>
                      </div>
                    </div>
                    <div className="w-2/5 flex flex-col justify-center items-center m-0 p-0 border-0">
                      <div className="text-gray-300 mb-3 flex justify-between w-2/5 items-center">
                        <svg className="fill-current Svg-ulyrgf-0 hJgLcF" role="img" height="16" width="16" viewBox="0 0 16 16"
                          >
                          <path
                            d="M4.5 6.8l.7-.8C4.1 4.7 2.5 4 .9 4v1c1.3 0 2.6.6 3.5 1.6l.1.2zm7.5 4.7c-1.2 0-2.3-.5-3.2-1.3l-.6.8c1 1 2.4 1.5 3.8 1.5V14l3.5-2-3.5-2v1.5zm0-6V7l3.5-2L12 3v1.5c-1.6 0-3.2.7-4.2 2l-3.4 3.9c-.9 1-2.2 1.6-3.5 1.6v1c1.6 0 3.2-.7 4.2-2l3.4-3.9c.9-1 2.2-1.6 3.5-1.6z">
                          </path>
                        </svg>
                        <svg className="fill-current Svg-ulyrgf-0 hJgLcF" role="img" height="16" width="16" viewBox="0 0 16 16"
                          >
                          <path d="M13 2.5L5 7.119V3H3v10h2V8.881l8 4.619z"></path>
                        </svg>
                        <button id="play-btn" className="bg-white rounded-full w-8 h-8 flex justify-center items-center">
                          <svg role="img" height="16" width="16" viewBox="0 0 16 16" className="Svg-ulyrgf-0 hJgLcF">
                            <path fill="none" d="M0 0h16v16H0z"></path>
                            <path d="M3 2h3v12H3zM10 2h3v12h-3z"></path>
                          </svg>
                        </button>
                        <svg className="fill-current Svg-ulyrgf-0 hJgLcF" role="img" height="16" width="16" viewBox="0 0 16 16"
                          >
                          <path d="M11 3v4.119L3 2.5v11l8-4.619V13h2V3z"></path>
                        </svg>
                        <svg className="fill-current Svg-ulyrgf-0 hJgLcF" role="img" height="16" width="16" viewBox="0 0 16 16"
                          >
                          <path
                            d="M5.5 5H10v1.5l3.5-2-3.5-2V4H5.5C3 4 1 6 1 8.5c0 .6.1 1.2.4 1.8l.9-.5C2.1 9.4 2 9 2 8.5 2 6.6 3.6 5 5.5 5zm9.1 1.7l-.9.5c.2.4.3.8.3 1.3 0 1.9-1.6 3.5-3.5 3.5H6v-1.5l-3.5 2 3.5 2V13h4.5C13 13 15 11 15 8.5c0-.6-.1-1.2-.4-1.8z">
                          </path>
                        </svg>
                      </div>
                      <div className="flex flex-row justify-between items-center w-full">
                        <div id="time-elapsed" className="text-gray-300 text-xs text-center">1:41</div>
                        <div className="bg-gray-600 flex w-full h-full border border-gray-600 rounded-full mx-4">
                          <div id="progress" className="bg-gray-300 border border-gray-300 rounded-full w-0 h-1"></div>
                        </div>
                        <div id="duration" className="text-gray-300 text-xs text-center">3:04</div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-end items-center w-1/3 mr-4">
                      <div className="flex justify-center w-2/5 items-center text-gray-300">
                        <svg className="fill-current m-4" height="20"  viewBox="0 0 48 48" width="48"
                          xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 0h48v48H0z" fill="none" />
                          <path
                            d="M30 12H6v4h24v-4zm0 8H6v4h24v-4zM6 32h16v-4H6v4zm28-20v16.37c-.63-.23-1.29-.37-2-.37-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6V16h6v-4H34z" />
                        </svg>
                        <svg className="fill-current mr-2 Svg-ulyrgf-0 hJgLcF" role="img" height="16" width="16" viewBox="0 0 16 16"
                         >
                          <path
                            d="M12.945 1.379l-.652.763c1.577 1.462 2.57 3.544 2.57 5.858s-.994 4.396-2.57 5.858l.651.763a8.966 8.966 0 00.001-13.242zm-2.272 2.66l-.651.763a4.484 4.484 0 01-.001 6.397l.651.763c1.04-1 1.691-2.404 1.691-3.961s-.65-2.962-1.69-3.962zM0 5v6h2.804L8 14V2L2.804 5H0zm7-1.268v8.536L3.072 10H1V6h2.072L7 3.732z">
                          </path>
                        </svg>
                        <div className="bg-gray-300 border border-gray-300 rounded-full w-3/5 h-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
 );
}
 
export default Artist;