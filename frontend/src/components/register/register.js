import React from 'react';
import './register.css'

const Registration = () =>{
    return <div>
    <form>
      <label for='username'>Username</label><input type='text' id='username' name='username' /> 
      <label for='email'>Email</label><input type='email' id='email' name='email'/>
      {/* <label for='phone'>Phone</label><input type= */}
      <label for='password'>Password</label><input type='password' id='password' name='password' />
      <button>Register</button>
    </form>

  </div>
}

export default Registration;