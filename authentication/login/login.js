import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

export default function login() {
  return (
    <div id='body'>
      <video loop muted autoPlay playsInline className="background-video">
        <source src="assets/7385122-uhd_3840_2160_30fps.mp4" type="video/mp4" />
      </video>

      <div className="image">
        <img src="assets/milestone logo.png" alt="Milestone Logo" />
      </div>

      <div className="login-card">
        <h1>Welcome back</h1>
        <p>We’re so excited to see you again!</p>
        <div>
          <label1 htmlFor="email-phone">Email or phone number</label1>
          <br />
          <input type="text" id="email-phone" name="email-phone" />

          <br />
          <label2 htmlFor="password">Password</label2>
          <br />
          <input type="password" id="password" name="password" />

        <p className="forgot"><Link to="/forgot">Forgot Password?</Link>  
          </p>    
              <br />
          <button type="submit">Log in</button>
        </div>

        <p className="signup">
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
