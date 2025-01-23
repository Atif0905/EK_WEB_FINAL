import React, { useRef } from "react";
import data from "../Home.json";
import "./HomeLeader.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const HomeTestimonial = () => {
  const swiperRef = useRef(null);
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev(); 
    }
  };
  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext(); 
    }
  };
  return (
    <div className="container_backdiv">
      <div className="row testimonial_homediv">
        <div className="col-md-4 col-sm-12 relative">
          <p className="main-subheading">TESTIMONIALS</p>
          <h2 className="main-heading">Look What Our Customers Say!</h2>
          <p className="main-text">
          Hear From Those Who Found Home With Us
          </p>
          <div className="testii_circle_div">
            <div className="testi_circle" onClick={handlePrev}>
              <IoIosArrowRoundBack className="arrow_icon1" />
            </div>
            <div className="testi_circle" onClick={handleNext}>
              <IoIosArrowRoundForward className="arrow_icon1" />
            </div>
          </div>
          <div className="testi_bluediv"></div>
        </div>
        <div className="col-md-2 col-sm-12 relative"></div>
        <div className="col-md-6 col-sm-12 relative">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            pagination={{
              el: ".customtestimonial-pagination",
              clickable: true,
              renderBullet: (index, className) =>
                `<span class="${className}"></span>`,
            }}
          >
            <div className="relative">
              {data.Testimonial.map((NewData, index) => {
                return (
                  <SwiperSlide>
                    <div className="center">
                      <div key={index} className="testimonial_card">
                        <div className="testimonial_contentdiv">
                          <div>
                            <img className="testii" src="/test.webp" alt="hh" loading="lazy" />
                          </div>
                          <div className="test_text_div">
                            <p className="testii_text">{NewData.text}</p>
                          </div>
                        </div>
                        <div className=" test_bottomdiv">
                          <div className=" test_namediv">
                            <p className="test_name">{NewData.name}</p>
                          </div>
                          <div>
                            <img className="star-img" src="/testimonial_star.webp" alt="dd" loading="lazy" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>
            <div className="customtestimonial-pagination"></div>
          </Swiper>
          <div className="homecircle test_bluecircle1"></div>
          <div className="homecircle test_bluecircle2"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonial;
