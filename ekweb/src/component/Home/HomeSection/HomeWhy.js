import React from 'react';
import '../Home.css';
import { LuHeartHandshake } from "react-icons/lu";
import { GoHome } from "react-icons/go";
import { VscShield } from "react-icons/vsc";

const HomeWhy = () => {
  const whyData = [
    {
      id: 1,
      icon: <LuHeartHandshake className="handshake_icon" />,
      title: "Real Estate Deals",
      description: "Unlock Unbeatable Real Estate Deals: Discover at Unbelievable Prices!",
    },
    {
      id: 2,
      icon: <GoHome className="handshake_icon" />,
      title: "Guaranteed Success",
      description: "Assured Profits, 100% Financial Security: Risk-Free Real Estate Success!",
    },
    {
      id: 3,
      icon: <VscShield className="handshake_icon" />,
      title: "AssureVest",
      description: "ROI Insurance: Safeguarding Your Investment with Unmatched Assurance",
    },
  ];

  return (
    <div className="why_maindiv relative">
      <div className="why_blue2"></div>
      <p className="main-subheading text-center">Why Ekakshar</p>
      <div className="why_subheading_div">
        <h2 className="main-heading text-center">Invest in Quality, Live in Luxury</h2>
      </div>
      <div className="whygrid_div relative">
        {whyData.map(({ id, icon, title, description }) => (
          <div key={id} className="whyek_card">
            <div>
              <div className="center">
                <div className="why_circle">{icon}</div>
              </div>
              <div>
                <h4 className="why_heading">{title}</h4>
                <div className="why_text_div">
                  <p className="main-text text-center">{description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="why_blue1"></div>
      <div className="why_blue3"></div>
    </div>
  );
};

export default HomeWhy;
