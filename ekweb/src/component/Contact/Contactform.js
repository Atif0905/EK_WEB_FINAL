import React, { useState } from "react";
import { FiPhone } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { GrMapLocation } from "react-icons/gr";
import "./Contact.css";
import emailjs from "emailjs-com";
const Contactform = () => {
  // States to control modal visibility and form reset
  const [showModal, setShowModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", budget: "", messagecontent: "",});
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
          budget: formData.budget,
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
  const closeModal = () => setShowModal(false);
  const closeErrorModal = () => setErrorModal(false);

  return (
    <div className="container relative">
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
      <div className="relative">
        <div className="mt-3 relative">
          <div className="center">
            <h5 className="main-subheading">GET IN TOUCH</h5>
          </div>
          <div className="center">
            <h2 className="main-heading">With Us</h2>
          </div>
          <div className="contactcircle1"></div>
        </div>
        <div className="contactcontainer">
          <div className="rightborder contactpadd">
            <div className="center">
              <FiPhone className="contacticon" />
            </div>
            <div className="center">
              <h2 className="main-subheading mt-2">PHONE</h2>
            </div>
            <h2 className="main-text-center">+91 - 7042005600</h2>
          </div>
          <div className="rightborder contactpadd">
            <div className="center">
              <GoMail className="contacticon" />
            </div>
            <div className="center">
              <h2 className="main-subheading mt-2">EMAIL</h2>
            </div>
            <h2 className="main-text-center">info@ekaksharbuildtech.com</h2>
          </div>
          <div className="contactpadd">
            <div className="center">
              <GrMapLocation className="contacticon" />
            </div>
            <div className="center">
              <h2 className="main-subheading mt-2">ADDRESS</h2>
            </div>
            <h2 className="main-text-center">
              7th Floor, Plot No-59, Riana Perito Tower , Sector-136, Noida
              201305
            </h2>
          </div>
        </div>
        <div className="center mt-3">
          <h5 className="contact-subhead">
            If you have any questions, please do not hesitate to send us a message.
          </h5>
        </div>
        <div className="contactcircle2"></div>
      </div>
      <div className="center relative">
        <div className="formdiv mt-3">
          <div className="getindiv center">
            <h5>Get In Touch</h5>
          </div>
          <div className="inputpadding">
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" id="name" className="contactinput" placeholder="Name" value={formData.name} onChange={handleChange} required/>
              <input type="email" name="email" id="email" className="contactinput" placeholder="E-Mail" value={formData.email} onChange={handleChange} required/>
              <input type="number" name="phone" id="phone" className="contactinput noscroll" placeholder="Number"   value={formData.phone} onChange={handleChange} required/>
              <input type="number" name="budget" id="budget" className="contactinput" placeholder="Budget" value={formData.budget} onChange={handleChange} required  />
              <textarea name="messagecontent" id="messagecontent" className="contactinput" placeholder="Message" rows="5" value={formData.messagecontent} onChange={handleChange} required></textarea>
              <div className="center mt-3">
                <button type="submit" className="registerbutton">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="contactcircle3"></div>
        <div className="contactcircle4"></div>
        <div className="contactcircle5"></div>
      </div>
    </div>
  );
};

export default Contactform;
