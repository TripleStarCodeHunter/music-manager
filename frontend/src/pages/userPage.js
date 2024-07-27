import { useEffect, useState } from "react";
import Bubbles from "../components/BubblesBackground/Bubbles";
const UserPage = ()=>{
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
    return(
        <Bubbles userName={userdata} password={userpass} email={useremail} phoneNo={userphone}/>
    );
}
export default UserPage;