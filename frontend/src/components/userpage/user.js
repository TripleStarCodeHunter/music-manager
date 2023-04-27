import React from 'react';
import './user.css';
import image from "../../images/user-profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect,useState } from 'react';
function UserProfileCard() {

  const [userdata,setUserdata] = useState('')
    const [useremail,setuseremail] = useState('')
    const [userphone,setuserPhone] = useState('')
    const [userpass,setuserpass] = useState('')
    // const [data, setData] = useState([]);
    //fetch data
    
    useEffect(() =>{
        const storedUsername = localStorage.getItem('data-username')
        const storedemail = localStorage.getItem('data-email')
        const storedphone = localStorage.getItem('data-phone')
        const storedpassword = localStorage.getItem('data-pass')
        if (storedUsername){
            setUserdata(storedUsername)
            setuserPhone(storedphone)
            setuseremail(storedemail)
            setuserpass(storedpassword)
        }

    },[])


  return (
    <body id="user-body">
  <div className='user-body'>
    <div className="wrapper">
      <div className="user-left">
        <img src={image} alt="user" width="100" />
        <h4>User Number 1</h4>
        <p>{userdata}</p>
      </div>
      <div className="user-right">
        <div className="info">
          <h3>Information</h3>
          <div className="info_data">
            <div className="data">
              <h4>Email</h4>
              <p>{useremail}</p>
            </div>
            <div className="data">
              <h4>Phone</h4>
              <p>{userphone}</p>
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
              <p>{userdata}</p>
            </div>
            <div className="data">
              <h4>Password</h4>
              <p>{userpass}</p>
            </div>
            <div className="data">
              <h4>Join Date</h4>
              <p>12/12/2021</p>
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