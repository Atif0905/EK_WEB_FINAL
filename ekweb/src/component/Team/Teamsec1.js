import React from "react";
import "./Team.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { IoLogoInstagram } from "react-icons/io5";
import { GrFacebookOption } from "react-icons/gr";
import { RxLinkedinLogo } from "react-icons/rx";
const leaderData = [
  {
    imgSrc: "./rohitsirimg.jpeg",
    name: "Mr. Rohit Kumar Khari",
    designation: "Founder & CMD",
    LinkedinLink: "https://www.linkedin.com/in/rohit-khari-883b00bb/",
    Instalink:
      "https://www.instagram.com/kharirohitgurjjar/?igsh=YzVrcWM0aHQzNXhp#",
    bio: "Born in Meerut in August 1990, Rohit Kumar Khari is a well-known personality in the real estate sector and the founder of...",
    link: "/our-cmd-founder",
  },
  {
    imgSrc: "./sanjeev-circle.webp",
    name: "MR. Sanjeev Agarwal",
    designation: "CEO",
    LinkedinLink: "https://www.linkedin.com/in/sanjeev-kumar-agarwal-91856a17/",
    bio: "Mr. Sanjeev Kumar Agarwal, CEO of Ekakshar Buildtech Pvt. Ltd., has over 25 years of expertise in legal, finance,",
    link: "/our-ceo",
  },
  {
    imgSrc: "./deepak-cicle.webp",
    name: "Mr. Deepak Sharma",
    bio: "Mr. Deepak Sharma, with over 15 years of experience in the real estate sector, plays a pivotal role in land procurement for",
    designation: "MD",
    link: "/our-md",
  },
];
const Teamsec1 = () => {
  const content = {
    videoSrc: "/team-hero-video.mp4",
    videoAlt: "Best Real Estate Consultancy",
  };
  return (
    <div>
    <div className=' teambackground-video'>
    <video
      src={content.videoSrc}
      className='teamhero-video'
      alt={content.videoAlt}
      autoPlay
      loop
      muted
    />
    <div className='backgroundbottomdiv'>Teams</div>
  </div>
  <div className="teampadd mt-4">
        <h1 className="main-subheading">INTRODUCE YOURSELF TO </h1>
        <h2 className="main-heading mt-3">Our Leaders</h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {leaderData.map((leader, index) => (
            <SwiperSlide key={index}>
              <a href={leader.link}>
                <div className="container">
                  <div className="center mt-4">
                    <div className="teamcard">
                      <div className="center"><img
                        src={leader.imgSrc}
                        className="Team-card-img"
                        alt={leader.name}
                      /></div>
                      <div className="">
                        <h3 className="team-name1 mt-3">{leader.name}</h3>
                      </div>
                      <div className="leader-designation ">
                        {leader.designation}
                      </div>
                      <div className="leader-bio mt-2">{leader.bio}</div>
                      <div className="icongrid mt-3">
                        <a href={leader.Instalink}>
                          <div className="teamiconback">
                            <IoLogoInstagram />
                          </div>
                        </a>
                        <div className="teamiconback">
                          <GrFacebookOption />
                        </div>
                        <a href={leader.LinkedinLink}>
                          <div className="teamiconback">
                            <RxLinkedinLogo />
                          </div>
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
  </div>
  );
};

export default Teamsec1;
