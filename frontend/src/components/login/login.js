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
        .then(res=>console.log(res))
        .catch(err =>console.log(err))
    }
    
    return( 
<div className='login-background'>
    <div className='auth-form-container'>
      <h2>Login</h2>
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

