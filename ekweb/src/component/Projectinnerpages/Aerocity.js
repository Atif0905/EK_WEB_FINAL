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
const Aerocity = () => {
  const [showModal, setShowModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    messagecontent: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
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
    videoSrc: "/aerocity-hero.mp4",
    videoAlt: "Hero Video",
  };
  const shyamimages = [
    {
      img: "/Aerocitysitelayout.webp",
    },
    {
      img: "/aerocity1.webp",
    },
    {
      img: "/aerocity2.webp",
    },
    {
      img: "/aerocity3.webp",
    },
  ];
  return (
    <div>
      <Helmet>
        <title>Buy Shree Shyam Aerocity Property - Ekakshar Buildtech</title>
        <meta name="title" content="Buy Shree Shyam Aerocity Property - Ekakshar Buildtech"/>
        <meta name="description" content="Buy Shree Shyam Aerocity property with Ekakshar Buildtech – Prime real estate options in a rapidly developing location, perfect for investment and living."/>
        <meta name="keywords" content="Buy Shree Shyam Aerocity Property, Luxury Shree Shyam Aerocity Property, Real Estate Agency in Noida, Real Estate Agencies in Noida, Property in Sikar Rajasthan, Luxury Property in Sikar Rajasthan, Prime Property in Sikar Rajasthan, Residential Property in Sikar Rajasthan, Commercial Property in Sikar Rajasthan"/>
        <link rel="canonical" href="https://ekaksharbuildtech.com/shree-shyam-aerocity"/>
        <meta name="DC.Title" content="Buy Shree Shyam Aerocity Property - Ekakshar Buildtech"/>
        <meta name="DC.Subject" content="Buy Shree Shyam Aerocity property with Ekakshar Buildtech – Prime real estate options in a rapidly developing location, perfect for investment and living."/>
        <meta property="og:title" content="Buy Shree Shyam Aerocity Property - Ekakshar Buildtech"/>
        <meta property="og:description" content="Buy Shree Shyam Aerocity property with Ekakshar Buildtech – Prime real estate options in a rapidly developing location, perfect for investment and living."/>
        <meta name="author" content="Ekakshar Buildtech"/>
        <meta name="owner" content="Ekakshar Buildtech"/>
        <meta name="language" content="en-us"/>
        <meta name="coverage" content="Global"/>
        <meta name="robots" content="INDEX,FOLLOW"/>
        <meta name="GOOGLEBOT" content="INDEX, FOLLOW"/>
        <meta name="doc-type" content="Webpage"/>
        <meta name="revisit-after" content="7 days"/>
        <meta property="og:image" content="/aerocity.webp" />
      </Helmet>
      <div className=" innerbackground-video">
        <video
          src={content.videoSrc}
          className="innerhero-video"
          alt={content.videoAlt}
          autoPlay
          loop
          muted
        />
        <div className="backgroundbottomdiv">Project</div>
      </div>
      <div className="container_backdiv">
        {data.Aerocity.map((NewData, index) => {
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
                {shyamimages.map((item, index) => (
                  <SwiperSlide key={index}>
                    <img
                      className="township_img"
                      src={item.img}
                      alt="Plots Near Khatu Shyam Mandir and Airport"
                      loading="lazy"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            {data.Aerocity.map((NewData, index) => {
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
                      <p className="listingtext">8 - 50 Lac</p>
                    </div>
                  </div>
                  <h1 className="project_heading mt-5">Description</h1>
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
                <input className="formfield" id="name" type="text" value={formData.name} onChange={handleChange} name="name" placeholder=" Name" required />
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="formfield" placeholder="Phone" />
                <input type="email" className="formfield" name="email" id="email" onChange={handleChange} value={formData.email} placeholder="E-Mail" />
                <textarea type="text" value={formData.messagecontent} className="formarea" onChange={handleChange} placeholder="Hello, I am interested in…" id="messagecontent" name="messagecontent" rows={4} />
                <button className="project_contbtn">Contact Us </button>
              </form>
            </div>
            <div className="project_layout">
              <img
                className="proj_layoutimg"
                src="/Aerocitysitelayout1.webp"
                alt="Shree Shyam Aerocity Map"
              />
            </div>
          </div>
        </div>

        <div className="feature_div">
          <h4 className="project_heading">Features</h4>
          <div className="hr"></div>
          <div className="feature_list_grid">
            <div className="list_div">
              {data.Aerocity[0].features1.map((feature, index) => (
                <div key={index} className="feature_list">
                  <div className="check1_div">
                    <IoIosCheckmark className="check_icon" />
                  </div>
                  <p className="main-text">{feature}</p>
                </div>
              ))}
            </div>
            <div className="list_div">
              {data.Aerocity[0].features2.map((feature, index) => (
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

export default Aerocity;
