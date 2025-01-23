import React from 'react';
import { FaCheckSquare } from "react-icons/fa";
import { FaHospitalUser } from "react-icons/fa6";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import "./Faqs.css"
// Reusable component for each mission item
const MissionItem = ({ icon, title, description }) => (
  <div className="advantage_card">
    <div className="center  mt-3">{icon}</div>
    <h5 className="mission-heading  mt-1">{title}</h5>
    <p className="main-text-cen mt-3">{description}</p>
  </div>
);

const FaqAdvantage = () => {
  const missionData = [
    {
      icon: <FaCheckSquare className="mission-icon" />,
      title: 'Quality Construction and Design',
      description: 'Delivering high-quality, well-designed properties that meet and exceed industry standards, ensuring durability, functionality, and aesthetic appeal.',
    },
    {
      icon: <FaHospitalUser className="mission-icon" />,
      title: 'Customer-Centric Approach',
      description: 'Focusing on customer satisfaction through transparent communication, tailored solutions, and delivering on promises, from initial consultation to project completion.',
    },
    {
      icon: <FaMagnifyingGlassLocation className="mission-icon" />,
      title: 'Prime Locations and Amenities',
      description: 'Developing properties in desirable locations with modern amenities, offering convenience, accessibility, and an enhanced lifestyle for residents.',
    },
  ];

  return (
    <div>
      <div className='faqcontainer1'>
      <h3 className='faq-subhead'><span className='subheadcolor'>The</span> Advantage</h3>
      <p className='main-text'>We specialize in crafting high-quality homes designed for luxury and comfort.</p>
      </div>
      <div className='lapview'>
      <div className="missionmaindiv1 mt-4 ">
        {missionData.map((item, index) => (
          <MissionItem
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div></div>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 3000,
          speep: 800,
          disableOnInteraction: false,
        }}
      >
        {missionData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='mobview'>
            <div className="missionmaindiv1 mobview">
              <MissionItem
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </div></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FaqAdvantage;
