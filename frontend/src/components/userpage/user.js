/*import React, { useState } from "react";
import "./user.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCreditCard,
  faTv,
  faTasks,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

function UserPage() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="user-background">
      <div className="user-container">
        <div className="user-leftbox">
          <nav className="user-nav">
            <a
              onClick={() => handleTabClick(0)}
              className={activeTab === 0 ? "tab active" : "tab"}
            >
              <FontAwesomeIcon icon={faUser} />
            </a>
          </nav>
        </div>
        <div className="user-rightbox">
          <div
            className={
              activeTab === 0 ? "profile tabShow" : "payment tabHide"
            }
          >
            <h1>Personal Info</h1>
            <h2>Full Name</h2>
            <input className="user-input" type="text" value="" />
            <h2>Birthday</h2>
            <input className="user-input" type="text" value="" />
            <h2>Gender</h2>
            <input className="user-input" type="text" value="" />
            <h2>Email</h2>
            <input className="user-input" type="email" value="" />
            <h2>Password</h2>
            <input className="user-input" type="password" value="" />
            <button className="user-btn">Update</button>
          </div>         
          </div>
        </div>
    </div>
)}
export default UserPage;*/

import React from 'react';
import './user.css';
import image from "../../images/user-profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect,useState } from 'react';
function UserProfileCard() {
  const [username, setUsername] = useState('');
  useEffect(()=>{
    const storedUsername = localStorage.getItem('prac-web-username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  },[])
  console.log(username)


  return (
    <body id="user-body">
  <div className='user-body'>
    <div className="wrapper">
      <div className="user-left">
        <img src={image} alt="user" width="100" />
        <h4>User Number 1</h4>
        <p>User Name</p>
      </div>
      <div className="user-right">
        <div className="info">
          <h3>Information</h3>
          <div className="info_data">
            <div className="data">
              <h4>Email</h4>
              <p>user@example.com</p>
            </div>
            <div className="data">
              <h4>Phone</h4>
              <p>+91 1234567890</p>
            </div>
            <div className="data">
              <h4>Country</h4>
              <p>India</p>
            </div>
          </div>
        </div>

<br />
<br />


        <div className="info">
          <h3>Information</h3>
          <div className="info_data">
            <div className="data">
              <h4>User Name</h4>
              <p>UserName</p>
            </div>
            <div className="data">
              <h4>Password</h4>
              <p>password</p>
            </div>
            <div className="data">
              <h4>Join Date</h4>
              <p>dd/mm/yyyy</p>
            </div>
          </div>
        </div>


<br/>
<br/>
        <div className="fav-song">
          <h3>Favourite Song</h3>
          <div className="main-song-data">
            <div className="data">
              <h4>Recent</h4>
              <p>Save Your Tears</p>
            </div>
            <div className="data">
              <h4>Most Played</h4>
              <p>Phani Aditiya</p>
            </div>
          </div>
        </div>

        {/* <div className="social_media">
          <ul>
            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div> */}
      </div>
    </div>
  </div>
  </body>
  );
}

export default UserProfileCard;

