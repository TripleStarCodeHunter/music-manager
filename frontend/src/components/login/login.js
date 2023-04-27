import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import "./login.css"

const Login = () =>{
    const [username,setusername] = useState();
    const [password,setpassword] = useState()
    const onsubmitHandler = (event) =>{
        event.preventDefault()
        // axios.post('http://localhost:5000/login',{username,password}).then
        axios.post('http://localhost:5000/login',{username,password})
        .then((response) => {
          const data= response.data;
          // console.log(data)
          localStorage.setItem('data-username',data.username);
          localStorage.setItem('data-email',data.email)
          localStorage.setItem('data-phone',data.phone)
          localStorage.setItem('data-pass',data.password)
        })
        .catch(err =>console.log(err))
    }
    // console.log()
    return( 

      
<div className='login-background'>
    <div className='login-auth-form-container'>
      <h2 id='header'>Login</h2>
    <form className='login-form' onSubmit={onsubmitHandler} method='post'>
      <label className='login-label' htmlFor='username'>Username</label>
      <input className='login-input' type='test' id='username' name='username' onChange={e=>setusername(e.target.value)}/> 
      <label className='login-label' htmlFor='password'>Password</label>
      <input className='login-input' type='password' id='password' name='password' onChange={p=>setpassword(p.target.value  )}/>
      <button className='login-button' >Login</button>
    </form>
    <br />
    <br/>
      <button className='login-link-btn' /*onClick={() => props.onFormSwitch('register')}*/>Dont Have An Account</button>
  </div>
</div>
);
}

export default Login ;

