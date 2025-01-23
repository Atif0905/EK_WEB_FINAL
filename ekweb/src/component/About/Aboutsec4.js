import React from 'react';
import './About.css';
import { IoEyeSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import { FaBalanceScale } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

// Reusable component for each mission item
const MissionItem = ({ icon, title, description }) => (
  <div className="missioninnderdiv">
    <div className="center mt-3">{icon}</div>
    <h5 className="mission-heading mt-1">{title}</h5>
    <p className="main-text-cen mt-5">{description}</p>
  </div>
);

const Aboutsec4 = () => {
  const missionData = [
    {
      icon: <IoEyeSharp className="mission-icon" />,
      title: 'VISION',
      description: 'Our vision is to make dreams of owning a home a reality for everyone, by offering better homes at prices that won’t break the bank. We’re not just about building houses,  we’re about changing lives by providing homes for those who need them most—giving a fresh start to people without a place to call their own.  At Ekakshar, we also believe in empowering our employees, offering them a supportive and inspiring environment where they can grow, succeed, and make a real impact.',
    },
    {
      icon: <LuBrainCircuit className="mission-icon" />,
      title: 'INNOVATION',
      description: ' At Ekakshar, we believe in doing things differently. We bring you the best locations at affordable prices, offering great value for your money. Our projects are designed to stand out with modern styles and the latest features that fit today’s lifestyle. From smart layouts to top-class amenities, we create spaces that are comfortable, unique, and perfect for living or investing. With a mix of great design, useful features, and budget-friendly options, we’re making real estate exciting and within reach for everyone.',
    },
    {
      icon: <FaUsers className="mission-icon" />,
      title: 'TEAM WORK',
      description: 'Our team works together smoothly, turning every lead into a potential deal and providing the right property options to meet client needs. We focus on collaboration and a passion for delivering top results. With a client-first mindset, we don’t just sell properties—we build long-term relationships based on trust. Every interaction with our clients, whether for residential plots, commercial spaces, or investment opportunities, is aimed at creating satisfaction and value.',
    },
    {
      icon: <FaBalanceScale className="mission-icon" />,
      title: 'INTEGRITY',
      description: 'We believe in being honest, transparent, and fair with our clients, partners, and team. From clear communication to delivering on our promises, we ensure every step of the process is built on trust. Whether it’s helping you choose the right property or ensuring timely delivery, we always prioritize doing what’s right. With integrity as our foundation, we aim to build lasting relationships and a reputation you can count on—because with us, it’s simple: "Either make us yours, or let us make you ours.',
    },
  ];

  return (
    <div>
      <div className='lapview'>
      <div className="missionmaindiv mt-5 ">
        {missionData.map((item, index) => (
          <MissionItem
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      </div>
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
            <div className="missionmaindiv ">
              <MissionItem
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='leadingdiv'>
        <div className='leadinghead'>LEADING THE WAY
        <div className='aboutwhiteline'></div></div>
        <h5 className='leadingtext'>We are not just a player in the industry. We are reinventing investment and property management.</h5>
      </div>
    </div>
  );
};

export default Aboutsec4;
