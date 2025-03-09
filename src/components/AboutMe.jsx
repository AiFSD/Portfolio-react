import React from "react";
import "../styles/Aboutme.css";

const AboutMe = () => {
  return (
    <div className="about-container">
      {/* Left Section - Profile Image */}
      <div className="image-container">
        <img
          src="https://i.pinimg.com/736x/ce/40/6f/ce406f10bd609248f1be1938bb05cc2c.jpg"
          alt="Profile"
          className="profile-image"
        />
      </div>

      {/* Right Section - About Me Text */}
      <div className="about-content">
        <h2>ABOUT ME</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. It has been the industry's standard dummy text ever since
          the 1500s. It has survived not only five centuries but also the leap
          into electronic typesetting.
        </p>

        {/* Buttons */}
        <div className="btn-container">
          <button className="hire-btn">HIRE ME</button>
          <button className="resume-btn">RESUME</button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
