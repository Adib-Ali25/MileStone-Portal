import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import Logo from "../../Assets/milestonelogo.png";
import Video from "../../Assets/background-video.mp4";

function signup() {
  return (
    <div id="body">
      {
        <video loop muted autoPlay playsInline className="background-video">
          <source src={Video} type="video/mp4" />
        </video>
      }
      <div className="image">
        <img src={Logo} alt="Milestone Logo" />
      </div>

      <div className="signup-card">
        <h1>Create an account</h1>
        <p>
          Create a account to experience the power of efficient business
          management.
        </p>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter email"
          />
          <br />
          <label htmlFor="Phone">Phone </label>
          <br />
          <input
            type="phone-number"
            id="number"
            name="phone"
            placeholder="Enter phone number"
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
          <label htmlFor="password">Confirm Password</label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Re-enter password"
          />
          <p className="terms-policy">
            By creating an account, you agree to the{" "}
            <a href="/terms" className="link">
              Terms of Use
            </a>{" "}
            and{" "}
            <a href="/privacy" className="link">
              Privacy Policy.
            </a>
          </p>

          <br />
          <button type="submit">Sign Up</button>
          <p className="login">
            Already have an account?<Link to="/login">login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
export default signup;
