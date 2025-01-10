import React from 'react';
import './signup.css';
import { Link } from 'react-router-dom';

export default function signup() {
  return (
    <div>
      <video loop muted autoPlay playsInline className="background-video">
        <source src="assets/7385122-uhd_3840_2160_30fps.mp4" type="video/mp4" />
      </video>

      <div className="image">
        <img src="assets/milestone logo.png" alt="Milestone Logo" />
      </div>

      <div className="signup-card">
        <h1>Welcome</h1>
        <p>We’re so excited to see you!</p>
        <div>
          <label1 htmlFor="phone-number">Full Name</label1>
          <br />
          <input type="text" id="Name" name="Name" />

          <br />
          <label2 htmlFor="email">Email</label2>
          <br />
          <input type="text" id="email" name="email" />

          <br />
          <label3 htmlFor="password">Password</label3>
          <br />
          <input type="password" id="password" name="password" />

          <br />
          <button type="submit">Sign up</button>
        </div>

        <p className="login">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
}
