import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import "./register.css"
// import { on } from '../../server/database_connection';

const Registration = () =>{
    const [username,setusername] = useState()
    const [password,setpassword] = useState()
    const [email,setemail] = useState()
    const [phone,setphone] = useState()

    const onsubmitHandler1 = async(event) =>{
        event.preventDefault()
        // axios.post('http://localhost:5000/login',{username,password}).then
         axios.post('http://localhost:5000/register',{username,password,email,phone})
        .then(res=>console.log(res))
        .catch(err =>console.log(err))
    }
    return( 

<div className='register-background'>
    <div className='auth-form-container'>
        <h2>Register</h2>
    <form className='register-form' onSubmit={onsubmitHandler1} method='post' >
      <label className='register-label' htmlFor='username'>Username</label>
      <input className='register-input' type='test' id='username' name='username' onChange={e=>setusername(e.target.value)}/> 
      <label className='register-label' htmlFor='password'>Password</label>
      <input className='register-input' type='password' id='password' name='password' onChange={p=>setpassword(p.target.value  )}/>
      <label className='register-label' htmlFor='email'>Email</label>
      <input className='register-input' type='email' id='email' name='email' onChange={e => setemail(e.target.value)} />
      <label className='register-label' htmlFor='phone'>Phone</label>
      <input className='register-input' type='tel' id='phone' name='phone'  onChange={t => setphone(t.target.value)}/>
      <button className='register-button' >Register</button>
    </form>
    </div>
</div>
    )
}

export default Registration ;