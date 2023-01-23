import '../styles/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom';

async function loginUser(credentials) {
  return fetch('http://localhost:3001/authentication/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

function LoginPage({ setToken }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async e => {
    e.preventDefault();
    console.log(email);
    const token = await loginUser({
      email,
      password
    }

    );
    setToken(token);
    console.log("token is", token);
  }
  return (

    <div className="Auth-form-container">
      <title>Login</title>
      <form className="Auth-form" >
        <div className="Auth-form-content" style={{ borderradius: "8px" }}>
          <div className='space'>
            <div className='head'>
              <p className=" fonthead" >Sign in</p>
            </div>
          </div>

          <div className="form-group mt-3  ">
            <label  >Sign in and start learn effectively</label>
            <input
              type="email"
              className="form-control mt-1 fontlabel"
              placeholder="Username"
              style={{ background: "#F0F0F0", width: "100%", height: "56px" }}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="password"
              className="form-control mt-1 fontlabel"
              placeholder="Password"
              style={{ background: "#F0F0F0", width: "100%", height: "56px" }}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3 fontlabel">
            <div className='column'>
              <button type="submit" className="btn btn-primary " onClick={handleSubmit}
                style={{ background: "#272727", width: "45%", height: "40px", borderRadius: 25}}>
                Login
              </button>
              <Link type="submit" className="btn btn-primary " to="/home"
                style={{ background: "#FFFFFF", width: "45%", height: "40px", borderRadius: 25, color: "#272727" }}>
                Register
              </Link>
            </div>
          </div>

        </div>
      </form>
    </div>
  )

}
export default LoginPage;