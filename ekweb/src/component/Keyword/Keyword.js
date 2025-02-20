import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import "../Home/Home.css";
import data from "../Home/Home.json";
import emailjs from "emailjs-com";
import HomeExclusive from "../Home/HomeSection/HomeExclusive";
import HomeBlog from "../Home/HomeSection/HomeBlog";
import HomeTestimonial from "../Home/HomeSection/HomeTestimonial";
import { Helmet } from "react-helmet";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const Keyword = ({ subhead1, title, description, Keyword, canonical , content}) => {
  const [showModal, setShowModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const swiperRef = useRef(null);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await emailjs.send(
        "service_dc4gxeq",
        "template_pu3449b",
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          budget: data.budget,
        },
        "V40sIGBn2yzrwC4bv"
      );
      if (response.status === 200) {
        setShowModal(true);
        reset(); // Reset form after successful submission
      }
    } catch (error) {
      setErrorMessage(error.text || "An unexpected error occurred.");
      setErrorModal(true);
      console.error("EmailJS Error:", error);
    }
  };

  const closeModal = () => setShowModal(false);
  const closeErrorModal = () => setErrorModal(false);
  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();
  const homeHeroData = data.HomeHero[0];
  const slides = data.HomeSlide;
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="name:title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={Keyword} />
        <link rel="canonical" href={canonical} />
        <meta name="DC.Title" content={title} />
        <meta name="DC.Subject" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta name="author" content="Ekakshar Buildtech" />
        <meta name="owner" content="Ekakshar Buildtech" />
        <meta name="language" content="en-us" />
        <meta name="coverage" content="Global" />
        <meta name="robots" content="INDEX,FOLLOW" />
        <meta name="GOOGLEBOT" content="INDEX, FOLLOW" />
        <meta name="doc-type" content="Webpage" />
        <meta name="revisit-after" content="7 days" />
        <meta property="og:image" content="https://ekaksharbuildtech.com/bluelogo.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ekakshar Buildtech" />
      </Helmet>

      <div className="homehero_maindivs">
        <div className="home_herodiv"></div>
        <div className="home_herodiv1 relative">
          <div className="container_backdiv">
            <h2 className="main-subheading">{homeHeroData.subhead}</h2>
            <div className="homehero_grid">
              <div>
                <h1 className="home_hero_heading1 mt-3">{subhead1}</h1>
                <div className="home_hero_txtdiv1">
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
                      <input
                        className="infield"
                        id="name"
                        type="text"
                        {...register("name", { required: true })}
                        placeholder="Name"
                      />
                      <input
                        className="infield"
                        id="email"
                        type="email"
                        {...register("email", { required: true })}
                        placeholder="Email"
                      />
                      <input
                        className="infield noscroll"
                        id="phone"
                        type="tel"
                        {...register("phone", { required: true })}
                        placeholder="Phone"
                      />
                      <input
                        className="infield"
                        id="budget"
                        type="text"
                        {...register("budget", { required: true })}
                        placeholder="Budget"
                      />
                      <button type="submit" className="regbtn">
                        Register
                      </button>
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

        <HomeExclusive />
        <HomeBlog />
        <HomeTestimonial />
      </div>
    </div>
  );
};

export default Keyword;
