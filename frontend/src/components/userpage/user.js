import React from 'react';
import './user.css';
import image from "../../images/user-profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect,useState } from 'react';
import '../BubblesBackground/Bubbles'
import Bubbles from '../BubblesBackground/Bubbles';
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
    <div>
      <Bubbles/>
    </div>
  );
}

export default UserProfileCard;