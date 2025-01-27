import React from "react";
import "../Home.css";
import data from "../Home.json";
const HomeAbout = () => {
  const homeAboutData = data.HomeAbout[0]; 
  const homeAboutDetails = data.HomeAboutData;
  return (
    <div className="container_backdiv mt-md-5">
      <p className="main-subheading">{homeAboutData.subhead}</p>
      <div className="about_maindiv">
        <div className="relative">
          <h2 className="main-heading">{homeAboutData.head}</h2>
          <div className="home_hero_txtdiv">
            <p className="main-text">{homeAboutData.text}</p>
          </div>
          {homeAboutDetails.map((NewData, index) => (
            <div key={index} className="home_deskdata">
              <div className="homeabt_data">
                <div>
                  <img className="userdata_icon" src={NewData.img} alt={`Icon for ${NewData.head}`} loading="lazy" />
                </div>
                <div>
                  <h2 className="abtdata_head">{NewData.head}</h2>
                  <p className="data-main-text">{NewData.text}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="blue_circle"></div>
        </div>
        <div className="relative">
          <div className="homeabt_imgdiv">
            <div className="homeabt1">
              <video className="abtimg1" src="/reel-video.mp4" autoPlay loop muted  alt="Best Real Estate Services" loading="lazy" />
            </div>
            <div>
              <div className="homeabt2">
                <img className="abtimg1" src="/aboutimg2.webp" alt="Buy Plots In Dehradun" loading="lazy" />
              </div>
              <div className="homeabt3 relative">
                <img className="abtimg1" src="/aboutimg3.webp" alt="Plots Near Jewar Airport" loading="lazy" />
                <div className="blue_circle2"></div>
              </div>
            </div>
          </div>
          <div className="relative">
            {homeAboutDetails.map((NewData, index) => (
              <div key={index} className="home_mobdata">
                <div className="homeabt_data relative">
                  <div>
                    <img className="userdata_icon" src={NewData.img} alt={`Icon for ${NewData.head}`} loading="lazy" />
                  </div>
                  <div>
                    <h2 className="abtdata_head">{NewData.head}</h2>
                    <p className="data-main-text">{NewData.text}</p>
                  </div>
                </div>
                <div className="abt_blue_circle3"></div>
              </div>
            ))}
          </div>
          <div className="cicle_text">
            <img className="cicle_imgtxt" src="/lettercircle.webp" alt="Circle Text" loading="lazy" />
          </div>
          <div className="blue_circle1"></div>
        </div>
      </div>
    </div>
  );
};
export default HomeAbout;