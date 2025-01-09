import React from 'react';
import './forgot.css';
import { Link } from 'react-router-dom';

export default function forgot() {
  return (
    <div id='body'>
      <video loop muted autoPlay playsInline className="background-video">
        <source src="assets/7385122-uhd_3840_2160_30fps.mp4" type="video/mp4" />
      </video>

      <div className="image">
        <img src="assets/milestone logo.png" alt="Milestone Logo" />
      </div>

      <div className="forgot-card">
        <h1>Forgot password ?</h1>
        <p>Enter your email to recieve the confermation OTP</p>
        <div>
            <br />
          <label1 htmlFor="email-phone">Email</label1>
          <br />
          <input type="text" id="email-phone" name="email-phone" />

          <br />

          <button type="submit">Send OTP</button>
        </div>

        <p className="signup">
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
