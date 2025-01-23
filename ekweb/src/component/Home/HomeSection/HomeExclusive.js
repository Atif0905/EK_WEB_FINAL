import React from "react";
import "../Home.css";
import data from "../Home.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { FaStar } from "react-icons/fa";
import { RiFireFill } from "react-icons/ri";
import { PiHouseFill } from "react-icons/pi";
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

const HomeExclusive = () => {
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
              <p className="rqst_text" style={{ color: textColor }}>
                {" "}{NewData.txt}
              </p>
            </div>
          </div>
          <div className="p-1">
            <h4 className="exe_type">{NewData.request}</h4>
            <h6 className="exe_name">{NewData.name}</h6>
            <p className="main-text">{NewData.address}</p>
          </div>
        </div>
      </a>
    );
  };

  return (
    <>
      <div className="container_backdiv">
        <p className="main-subheading">CHECKOUT OUR </p>
        <div className="check_div">
          <div>
            <h2 className="main-heading">Exclusive Projects</h2>
            <div className="home_exclusive_txtdiv">
              <p className="main-text">
                {" "}
                Creating exclusive, sustainable spaces that blend luxury,
                spirituality, and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Swiper for larger screens */}
      <div className="exclusive_swipediv">
        <Swiper
          spaceBetween={40}
          slidesPerView={3.5}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          breakpoints={{
            768: { slidesPerView: 3.5, spaceBetween: 20 },
            1024: { slidesPerView: 3.5, spaceBetween: 40 },
          }}
          modules={[Autoplay]}
        >
          {data.ExclusiveProject.map((NewData) => (
            <SwiperSlide key={NewData.name}>{renderCard(NewData)}</SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Cards for mobile view */}
      <div className="exclusive_mobdiv">
        {data.ExclusiveProject.slice(0, 3).map((NewData) =>
          renderCard(NewData)
        )}
        <div className="center">
          <a href="/project">
            <button className="exclusive_proprty_btn">
              View more properties
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default HomeExclusive;
