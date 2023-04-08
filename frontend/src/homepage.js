import React from 'react';
import {NavLink } from 'react-router-dom';

const HomePage = () =>{
    
    return <div><h1>Home Page</h1>
    <NavLink to='/login'><button>Login</button></NavLink>
    <NavLink to='/register'><button>Register</button></NavLink>
    </div>
}

export default HomePage