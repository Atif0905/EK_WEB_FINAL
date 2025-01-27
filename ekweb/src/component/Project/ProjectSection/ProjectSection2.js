import React from 'react';
import './Project.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { FaStar } from "react-icons/fa";
import { RiFireFill } from "react-icons/ri";
import { PiHouseFill } from "react-icons/pi";
import data from "./Projectnewcard.json"
import { MdCurrencyRupee } from "react-icons/md";



const iconsMapping = {
  Popular: <RiFireFill />,
  "Coming Soon": <PiHouseFill />,
  "Discounted Price": <MdCurrencyRupee /> ,
  default: <FaStar />,
};

const backgroundColors = {
  Trending: "#FFE1E1",
  "Coming Soon": "#D7EEFF",
  "Discounted Price": "#F1FFF1",
  default: "#D4D4D4",
};

const textColors = {
  Trending: "#FF1111",
  "Coming Soon": "#119BFF",
  "Discounted Price": "#00CE3A",
  default: "#000000",
};


const ProjectSection2 = () => {
  const renderCard = (NewData) => {
    const bgColor = backgroundColors[NewData.txt] || backgroundColors.default;
    const textColor = textColors[NewData.txt] || textColors.default;

    return (
      <a href={NewData.link} key={NewData.name}>
        <div className="exclusive_carddiv">
          <div className="relative">
            <img
              className="exe_img"
              src={NewData.img1}
              alt={NewData.keyword}
              loading="lazy"
            />
            <div className="exe_rqst_div" style={{ backgroundColor: bgColor }}>
              <span
                className="rqst_icon"
                style={{
                  color: textColor,
                  fontSize: "20px",
                  marginBottom: "5px",
                }}
              >
                {iconsMapping[NewData.txt] || iconsMapping.default}
              </span>
              <p className="rqst_text ms-1" style={{ color: textColor }}>
                {NewData.txt}
              </p>
            </div>
          </div>
          <div className="p-1">
            <h4 className="exe_type">{NewData.request}</h4>
            {/* <h6 className="exe_name">{NewData.name}</h6> */}
            <p className="main-text">{NewData.address}</p>
          </div>
        </div>
      </a>
    );
  };
  return (
    <div className="cardpadding projectmar">
      <div className="projectline"></div>
      <h2 className="project-heading">Find your next place to live</h2>

      {/* Mobile Swiper */}
      <div className="mt-4 cardpadding mobile-only">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          <SwiperSlide>
          {data.ExclusiveProject.map((NewData, index) => (
            renderCard(NewData)
          ))}
           </SwiperSlide>
        </Swiper>
      </div>

      {/* Static layout for Tablet and Desktop */}
      <div className="cardpadding desktop-only">
        <div className="cardlastdiv">
          {data.ExclusiveProject.map((NewData, index) => (
            renderCard(NewData)
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection2;
