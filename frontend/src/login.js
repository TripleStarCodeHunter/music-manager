import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Login = () =>{
    const [username,setusername] = useState();
    const [password,setpassword] = useState()
    const onsubmitHandler = (event) =>{
        event.preventDefault()
        // axios.post('http://localhost:5000/login',{username,password}).then
        axios.post('http://localhost:5000',{username,password})
        .then(res=>console.log(res))
        .catch(err =>console.log(err))
    }
    
    return <div>
    <form action='/login' onSubmit={onsubmitHandler} method='post'>
      <label htmlFor='username'>Username</label>
      <input type='test' id='username' name='username' onChange={e=>setusername(e.target.value)}/> 
      <label htmlFor='password'>Password</label>
      <input type='password' id='password' name='password' onChange={p=>setpassword(p.target.value  )}/>
      <button>Login</button>
    </form>

  </div>
}

export default Login ;