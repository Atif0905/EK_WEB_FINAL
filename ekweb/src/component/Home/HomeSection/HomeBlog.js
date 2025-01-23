import React from "react";
import "./HomeLeader.css";
import data from "../Home.json";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const HomeBlog = () => {
  return (
    <div className="homeblog_maindiv">
      <div className="container_backdiv">
        <p className="main-subheading-white text-center">WHAT'S TRENDING</p>
        <h2 className="main-heading-white text-center">Latest Blogs & Posts</h2>
        <div className="homeblog_desk">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            loop={true}
            autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              768: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            pagination={{
              el: ".customblog-pagination",
              clickable: true,
              renderBullet: (index, className) => {
                if (index < 3) {
                  return `<span class="${className}"></span>`;
                }
                return "";
              },
            }}
          >
            <div className="home_blog_grid">
              {data.HomeBlog.map((NewData, index) => {
                return (
                  <SwiperSlide>
                    <a href={NewData.link}>
                      <div key={index} className="home_blog_card">
                        <div className="relative">
                          <img className="homeblog_img" src={NewData.img1} alt={NewData.keyword} loading="lazy" />
                          <div className="blog_date">
                            <div>
                              <p className="blog_datetext">{NewData.date}</p>
                              <p className="blog_day">{NewData.day}</p>
                            </div>
                          </div>
                        </div>
                        <div className="p-2">
                          <h4 className="blog_heading">{NewData.name}</h4>
                          <p className="blog_text">{NewData.text}</p>
                          <div className="d-flex align-items-center justify-content-end">
                            <div className="blog_circle">
                              <IoIosArrowRoundForward className="arrow_icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </SwiperSlide>
                );
              })}
            </div>
            <div className="customblog-pagination"></div>
          </Swiper>
        </div>
        <div className="homeblog_mob">
          {data.HomeBlog.slice(0, 3).map((NewData, index) => {
            return (
              <a href={NewData.link} key={index}>
                <div className="home_blog_card">
                  <div className="relative">
                    <img className="homeblog_img" src={NewData.img1} alt="cd" loading="lazy"/>
                    <div className="blog_date">
                      <div>
                        <p className="blog_datetext">{NewData.date}</p>
                        <p className="blog_day">{NewData.day}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-2">
                    <h4 className="blog_heading">{NewData.name}</h4>
                    <p className="blog_text">{NewData.text}</p>
                    <div className="d-flex align-items-center justify-content-end">
                      <a href={NewData.link}>
                        <div className="blog_circle">
                          <IoIosArrowRoundForward className="arrow_icon" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
          <a href="/our-blogs">
            <button className="homeblog_mob_btn">View more blogs</button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default HomeBlog;