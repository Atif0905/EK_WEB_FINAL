import React from 'react';
import './HomeLeader.css';

const HomeLeader = () => {
  return (
    <div className="leader_maindiv">
      <p className="main-subheading text-md-center">INTRODUCE YOURSELF TO</p>
      <h2 className="main-heading text-md-center">Our CMD & Founder</h2>
      <div className="leader_grid">
        <div className="leader_img">
          <div className="leader_blue_circle2"></div>
          <img className="leaderimg" src="/rohitsirimg.jpeg" alt="Mr. Rohit Kumar Khari" loading="lazy"/>
          <div className="leader_blue_circle1"></div>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <div>
            <p className="main-text">
             Mr. Rohit Kumar Khari, born in August 1990 in Meerut, is the founder of Ekakshar Buildtech Pvt. Ltd. and a renowned figure in the real estate sector. He began his career in 2013 with reputed builder, gaining important industry experience before launching his first solo project in Khatu Shyam Ji, Rajasthan, in 2022. With visionary leadership and a commitment to excellence, he has successfully led major development projects across India, shaping the future of urban spaces.
            </p>
            <div className="founder_div">
              <div>
                <h4 className="leader_heading">Mr. Rohit Kumar Khari</h4>
                <p className="founder_subtext">CMD & Founder</p>
              </div>
              <div>
                <a href="/our-cmd-founder">
                  <button className="leader_btn">See More</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLeader;
