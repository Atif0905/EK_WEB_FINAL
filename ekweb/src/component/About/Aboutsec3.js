import React from "react";
import "./About.css";

const Aboutsec3 = () => (
  <div className="threegrid mt-5">
    <div className="relative">
      <img src="/aboutleftimg.webp" className="leftimg" alt="Real Estate Agency"/>
      <img src="/gradientcircle1.webp" className="gradientcircle1" alt="about-us" />
      <img src="/gradientcircle3.webp" className="gradientcircle2" alt="about-us"/>
    </div>
    <div className="relative container mt-3">
      <div className="abtpadding">
        <img src="/gradientcircle2.webp" className="gradientcircle3" alt="about-us"/>
        <div className="center">
          <img src="/star.webp" className="starimg" alt="about-us" />
        </div>
        <div className="center">
          <h5 className="main-subheading mt-3">ABOUT EKAKSHAR </h5>
        </div>
        <div className="center dreampadding">
          <h2 className="main-heading-center">
            If you can dream it, We can build it.{" "}
          </h2>
        </div>
        <p className="main-text-center">
          Ekakshar Buildtech Pvt. Ltd. is a progressive real estate development
          firm renowned for impactful and varied projects that address both
          spiritual and residential demands. One of the most notable projects is
          Shree Shyam Township in Khatu Shyam Ji, Rajasthan. This expansive
          100-acre development has already sold 300-400 plots and blends modern
          life with spirituality by including the Hidamba Devi Temple, making it
          a centre for worship. Ekakshar Buildtech Pvt. Ltd. is also pioneering
          a unique project Shri Shyam AeroCity, a 36-beega government-approved
          project, and a groundbreaking initiative offering virtual plots within
          a hospital in Khatu Shyam Ji, creating a blend of real estate and
          healthcare.
        </p>
      </div>
    </div>
    <div className="relative rightimgdiv">
      <img
        src="/aboutrightimg.webp"
        className="rightimg"
        alt="Real Estate Services"
      />
      <img
        src="/gradientcircle3.webp"
        className="gradientcircle2"
        alt="about-us"
      />
      <div className="gradientcircle4"></div>
    </div>
  </div>
);

export default Aboutsec3;
