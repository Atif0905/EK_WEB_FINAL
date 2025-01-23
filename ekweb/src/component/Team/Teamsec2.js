import React from 'react';
import data from './Team.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { IoLogoInstagram } from "react-icons/io5";
import { LuFacebook } from "react-icons/lu";
import { LiaLinkedin } from "react-icons/lia";

const Teamsec2 = () => {
  const truncateText = (text, wordLimit) => {
    if (!text || typeof text !== 'string') return '';
    const words = text.split(' ');
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(' ') + '...'
      : text;
  };
  

  return (
    <div className="teampadd mt-3">
      <h2 className="main-heading">Meet the team</h2>
      <div className='mobview'>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            767: { slidesPerView: 1 },
          }}
        >
          {data.Leader.map((NewData, index) => (
            <SwiperSlide key={index}>
              <div className="container ">
                
                  <div className="center">
                    <div className="teamcard mt-3">
                    <a href={`/leader/${NewData.id}`} className="team-card-link">
                      <div className='center'>
                        <img
                          src={NewData.img}
                          className="Team-card-img"
                          alt={NewData.head}
                        />
                      </div>
                      <h3 className="team-name1 mt-3">{NewData.head}</h3>
                      <div className="leader-designation">{NewData.txt}</div>
                      <div className="leader-bio mt-2">{truncateText(NewData.bio, 15)}</div>
                      </a>
                      <div className="icongrid mt-3">
                      <div className="center"><a href={NewData.InstaLink} target="_blank" rel="noopener noreferrer">
                          <IoLogoInstagram />
                        </a></div>
                        <div className="center"><a href={NewData.facebooklink} target="_blank" rel="noopener noreferrer">
                          <LuFacebook />
                        </a></div>
                        <div className="center"><a href={NewData.LinkedinLink} target="_blank" rel="noopener noreferrer">
                          <LiaLinkedin />
                        </a></div>
                      </div>
                    </div>
                  </div>
              
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='teamgrid'>
        {data.Leader.map((NewData, index) => (
          <div className="container  lapview" key={index}>
            <a href={`/leader/${NewData.id}`} className="team-card-link">
              <div className="center">
                <div className="teamcard mt-3">
                  <img
                    src={NewData.img}
                    className="Team-card-img"
                    alt={NewData.head}
                  />
                  <h3 className="team-name1 mt-3">{NewData.head}</h3>
                  <div className="leader-designation">{NewData.txt}</div>
                  <div className="leader-bio mt-2">{truncateText(NewData.bio, 15)}</div>
                  <div className="icongrid mt-3">
                  <div className="center"><a href={NewData.InstaLink} target="_blank" rel="noopener noreferrer">
                          <IoLogoInstagram />
                        </a></div>
                        <div className="center"><a href={NewData.facebooklink} target="_blank" rel="noopener noreferrer">
                          <LuFacebook />
                        </a></div>
                        <div className="center"><a href={NewData.LinkedinLink} target="_blank" rel="noopener noreferrer">
                          <LiaLinkedin />
                        </a></div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teamsec2;
