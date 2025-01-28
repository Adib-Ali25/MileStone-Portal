import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import Logo from "../../Assets/milestonelogo.png";
import Video from "../../Assets/background-video.mp4";

function login() {
  return (
    <div id="body">
      {<video loop muted autoPlay playsInline className="background-video">
        <source src={Video} type="video/mp4" />
      </video>}

      <div className="image">
        <img src={Logo} alt="Milestone Logo" />
      </div>

      <div className="login-card">
        <h1>Welcome</h1>
        <p>We’re so excited to see you again!</p>
        <div>
          <label htmlFor="email-phone">Email or phone number</label>
          <br />
          <input
            type="text"
            id="email-phone"
            name="email-phone"
            placeholder="Enter email or phone number"
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
          />
          <br />
          <p className="forgot">
            <Link to="/forgot"><p>Forgot your password ?</p></Link>
          </p>
          <br />
          <button type="submit">Login</button>
          <p className="signup">
            Don’t have an account? <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default login;
