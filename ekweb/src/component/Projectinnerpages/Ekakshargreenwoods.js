import React, { useState } from "react";
import "./Inner.css";
import data from "./Inner.json";
import { IoIosCheckmark } from "react-icons/io";
import HomeLast from "../Home/HomeSection/HomeLast";
import { Helmet } from "react-helmet";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { FaBuilding } from "react-icons/fa6";
import { BsTextarea } from "react-icons/bs";
import { FaIndianRupeeSign } from "react-icons/fa6";
import emailjs from "emailjs-com";
import "../../App.css"
const Ekakshargreenwoods = () => {
  const [showModal, setShowModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    messagecontent: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await emailjs.send(
        "service_dc4gxeq",
        "template_pu3449b",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          messagecontent: formData.messagecontent,
        },
        "V40sIGBn2yzrwC4bv"
      );

      if (response.status === 200) {
        setShowModal(true);
        setFormData({ name: "", email: "", phone: "", messagecontent: "" }); 
      }
    } catch (error) {
      setErrorMessage(error.text || "An unexpected error occurred.");
      setErrorModal(true);
      console.error("EmailJS Error:", error);
    }
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const closeErrorModal = () => {
    setErrorModal(false);
  };
  const content = {
    videoSrc: process.env.PUBLIC_URL + "/EkaksharGreenwood.mp4",
    videoAlt: "Ekakshar Green Woods",
  };
  const woodsimages = [
    {
      img: "/greenwoodsinner.webp",
    },
    {
      img: "/woods1.webp",
    },
    {
      img: "/woods2.webp",
    },
    {
      img: "/woods3.webp",
    },
  ];
  return (
    <div>
      <Helmet>
        <title>
          Ekakshar Green Woods | Buy Plot in Jewar , Residential Plot in jewar{" "}
        </title>
        <meta
          name="description"
          content="Buy a plot in Jewar at Ekakshar Green Woods. Explore premium residential plots with world-class amenities, offering a serene and peaceful living experience."
        />
        <meta
          property="og:title"
          content="Ekakshar Green Woods | Buy Plot in Jewar ,  Residential Plot in jewar "
        />
        <meta
          property="og:description"
          content="Buy a plot in Jewar at Ekakshar Green Woods. Explore premium residential plots with world-class amenities, offering a serene and peaceful living experience."
        />
        <meta property="og:image" content="/greenwoodsouter.webp" />
        <meta
          property="og:url"
          content="https://ekaksharbuildtech.com/ekakshar-green-woods/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ekakshar Buildtech" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://ekaksharbuildtech.com/ekakshar-green-woods/"
        />
        <meta name="keywords" content="" />
      </Helmet>
      <div className="">
        <div className=" innerbackground-video">
          <video
            src={content.videoSrc}
            className="innerhero-video"
            alt={content.videoAlt}
            autoPlay
            loop
            muted
          />
          <div className="backgroundbottomdiv">Projects</div>
        </div>
      </div>
      <div className="container_backdiv">
        {data.EkaksharGreenWoods.map((NewData, index) => {
          return (
            <div key={index} className="project_bluediv">
              <div>
                <h2 className="proj_name">{NewData.name}</h2>
                <p className="main-text">{NewData.txt}</p>
              </div>
              <div>
                <p className="price-text">{NewData.price}</p>
              </div>
            </div>
          );
        })}
        <div className="projectdiv_grid">
          <div>
            <div className="innerproj_imgdiv">
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
                {woodsimages.map((item, index) => (
                  <SwiperSlide key={index}>
                    <img
                      className="township_img"
                      src={item.img}
                      alt="Plots Near Noida international Airport"
                      loading="lazy"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            {data.EkaksharGreenWoods.map((NewData, index) => {
              return (
                <div key={index} className="project_contentdiv">
                  <div className="listgrid">
                    <div className="mt-3">
                      <div className="center">
                        <FaBuilding className="listingicon" />
                      </div>
                      <h5 className="mt-2 listinghead">Property Type</h5>
                      <p className="listingtext">Residential Land / Plots</p>
                    </div>
                    <div className="mt-3">
                      <div className="center">
                        <BsTextarea className="listingicon" />
                      </div>
                      <h5 className="mt-2 listinghead">
                        Area of Residential Land / Plots
                      </h5>
                      <p className="listingtext">100 - 500 Sq. Yards</p>
                    </div>
                    <div className="mt-3">
                      <div className="center">
                        <FaIndianRupeeSign className="listingicon" />
                      </div>
                      <h5 className="mt-2 listinghead">Pricing</h5>
                      <p className="listingtext">25 lac - 1.25 cr</p>
                    </div>
                  </div>
                  <h4 className="project_heading mt-5">Description</h4>
                  <div className="hr"></div>
                  <div>
                    <p className="main-text">{NewData.description1}</p>
                    <p className="main-text">{NewData.description2}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <div className="project_formdiv">
              <form onSubmit={handleSubmit}>
                <input type="text" className="formfield" name="name" id="name" placeholder="Name" onChange={handleChange} value={formData.name} />
                <input type="number" id="phone" name="phone" className="formfield" placeholder="Phone" onChange={handleChange} value={formData.phone} />
                <input type="email" className="formfield" name="email" id="email" placeholder="E-Mail" onChange={handleChange} value={formData.email} />
                <textarea type="text" className="formarea" placeholder="Hello, I am interested in…" id="messagecontent" name="messagecontent" rows={4} onChange={handleChange} value={formData.messagecontent} />
                <button className="project_contbtn">Contact Us </button>
              </form>
            </div>
            <div className="project_layout">
              <img
                className="proj_layoutimg"
                src="/greenwoodsmap.webp"
                alt="Ekakshar Greenwoods Map"
              />
            </div>
          </div>
        </div>

        <div className="feature_div">
          <h4 className="project_heading">Features</h4>
          <div className="hr"></div>
          <div className="feature_list_grid">
            <div className="list_div">
              {data.EkaksharGreenWoods[0].features1.map((feature, index) => (
                <div key={index} className="feature_list">
                  <div className="check1_div">
                    <IoIosCheckmark className="check_icon" />
                  </div>
                  <p className="main-text">{feature}</p>
                </div>
              ))}
            </div>
            <div className="list_div">
              {data.EkaksharGreenWoods[0].features2.map((feature, index) => (
                <div key={index} className="feature_list">
                  <div className="check1_div">
                    <IoIosCheckmark className="check_icon" />
                  </div>
                  <p className="main-text">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <HomeLast />
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

export default Ekakshargreenwoods;
