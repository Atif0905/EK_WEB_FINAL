import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import "../Home.css";
import data from "../Home.json";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import emailjs from "emailjs-com";
const HomeHero = () => {
  const { register, handleSubmit, reset } = useForm();
  const swiperRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const onSubmit = async (data) => {
    try {
      const response = await emailjs.send(
        "service_dc4gxeq",
        "template_pu3449b",
        data,
        "V40sIGBn2yzrwC4bv"
      );

      if (response.status === 200) {
        setShowModal(true);
        reset(); 
      }
    } catch (error) {
      setErrorMessage(error.text || "An unexpected error occurred.");
      setErrorModal(true);
      console.error("EmailJS Error:", error);
    }
  };
  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();
  const closeModal = () => setShowModal(false);
  const closeErrorModal = () => setErrorModal(false);
  const homeHeroData = data.HomeHero[0];
  const slides = data.HomeSlide;
  return (
    <div className="homehero_maindivs">
      <div className="home_herodiv"></div>
      <div className="home_herodiv1 relative">
        <div className="container_backdiv">
          <h1 className="main-subheading">{homeHeroData.subhead}</h1>
          <div className="homehero_grid">
            <div>
              <h2 className="home_hero_heading">{homeHeroData.head}</h2>
              <div className="home_hero_txtdiv">
                <p className="main-text">{homeHeroData.text}</p>
              </div>
              <div className="swip_content">
                <div className="swip_circle swip_circle_left" onClick={handlePrev}>
                  <IoIosArrowBack className="hero_arrow_icon" />
                </div>
                <div className="swip_circle swip_circle_right" onClick={handleNext}>
                  <IoIosArrowForward className="hero_arrow_icon" />
                </div>
                <Swiper
                  onSwiper={(swiper) => (swiperRef.current = swiper)}
                  modules={[Pagination, Autoplay]}
                  spaceBetween={50}
                  slidesPerView={1}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  loop={true}
                  pagination={{
                    el: ".custom-pagination",
                    clickable: true,
                    renderBullet: (index, className) => `<span class="${className}"></span>`,
                  }}
                >
                  {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                      <div className="hero_swip center">
                        <img
                          className="hero_img"
                          srcSet={slide.img}
                          alt={slide.keyword}
                          loading="lazy"
                        />
                        <div className="swip_arrow_div"></div>
                      </div>
                    </SwiperSlide>
                  ))}
                  <div className="custom-pagination"></div>
                </Swiper>
                <div className="hero_blue_circle"></div>
              </div>
            </div>
            <div>
              <div className="heroform_maindiv">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form_headdiv">
                    <p className="form_heading mt-3">{homeHeroData.formhead}</p>
                  </div>
                  <div className="form_div">
                    <input className="infield" id="name" type="text" {...register("name", { required: true })} placeholder="Name"/>
                    <input className="infield" id="email" type="email" {...register("email", { required: true })} placeholder="Email"/>
                    <input className="infield noscroll" id="phone" type="tel" {...register("phone", { required: true })} placeholder="Phone"/>
                    <input className="infield" id="budget" type="text" {...register("budget", { required: true })} placeholder="Budget"/>
                    <button type="submit" className="regbtn">Register</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="homemodal">
          <div className="homemodal-content">
            <p>Thank you for submitting the form!</p>
            <button onClick={closeModal}>Ok</button>
          </div>
        </div>
      )}
      {errorModal && (
        <div className="homemodal">
          <div className="homemodal-content">
            <p>{errorMessage}</p>
            <button onClick={closeErrorModal}>Ok</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeHero;
