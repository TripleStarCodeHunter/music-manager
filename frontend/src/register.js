import React from "react";
import { useState } from "react";
import axios from "axios";
// import { on } from '../../server/database_connection';

const Register = () => {
  const [username, setusername] = useState();
  const [password, setpassword] = useState();
  const [email, setemail] = useState();
  const [phone, setphone] = useState();

  const onsubmitHandler1 = async (event) => {
    event.preventDefault();
    // axios.post('http://localhost:5000/login',{username,password}).then
    axios
      .post("http://localhost:5000/register", {
        username,
        password,
        email,
        phone,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form onSubmit={onsubmitHandler1} method="post">
        <label htmlFor="username">Username</label>
        <input
          type="test"
          id="username"
          name="username"
          onChange={(e) => setusername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(p) => setpassword(p.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => setemail(e.target.value)}
        />
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          onChange={(t) => setphone(t.target.value)}
        />
        <button>register</button>
      </form>
    </div>
  );
};

export default Register;
