import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FiPhone } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { GrMapLocation } from "react-icons/gr";
import "./Contact.css";
import emailjs from "emailjs-com";

const Contactform = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
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
        reset(); // Reset form after successful submission
      }
    } catch (error) {
      setErrorMessage(error.text || "An unexpected error occurred.");
      setErrorModal(true);
      console.error("EmailJS Error:", error);
    }
  };

  return (
    <div className="container relative">
      {/* Success Modal */}
      {showModal && (
        <div className="homemodal">
          <div className="homemodal-content">
            <p>Thank you for submitting the form!</p>
            <button onClick={() => setShowModal(false)}>Ok</button>
          </div>
        </div>
      )}
      {/* Error Modal */}
      {errorModal && (
        <div className="homemodal">
          <div className="homemodal-content">
            <p>{errorMessage}</p>
            <button onClick={() => setErrorModal(false)}>Ok</button>
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

        {/* Contact Information */}
        <div className="contactcontainer">
          <div className="rightborder contactpadd">
            <div className="center">
              <FiPhone className="contacticon" />
            </div>
            <h2 className="main-subheading mt-2 center">PHONE</h2>
            <h2 className="main-text-center">+91 - 7042005600</h2>
          </div>
          <div className="rightborder contactpadd">
            <div className="center">
              <GoMail className="contacticon" />
            </div>
            <h2 className="main-subheading mt-2 center">EMAIL</h2>
            <h2 className="main-text-center">info@ekaksharbuildtech.com</h2>
          </div>
          <div className="contactpadd">
            <div className="center">
              <GrMapLocation className="contacticon" />
            </div>
            <h2 className="main-subheading mt-2 center">ADDRESS</h2>
            <h2 className="main-text-center">
              7th Floor, Plot No-59, Riana Perito Tower, Sector-136, Noida 201305
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

      {/* Form */}
      <div className="center relative">
        <div className="formdiv mt-3">
          <div className="getindiv center">
            <h5>Get In Touch</h5>
          </div>
          <div className="inputpadding">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input 
                type="text" 
                className="contactinput" 
                placeholder="Name" 
                {...register("name", { required: "Name is required" })} 
              />
              {errors.name && <p className="error">{errors.name.message}</p>}

              <input 
                type="email" 
                className="contactinput" 
                placeholder="E-Mail" 
                {...register("email", { 
                  required: "Email is required", 
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" } 
                })} 
              />
              {errors.email && <p className="error">{errors.email.message}</p>}

              <input 
                type="number" 
                className="contactinput noscroll" 
                placeholder="Number" 
                {...register("phone", { required: "Phone number is required" })} 
              />
              {errors.phone && <p className="error">{errors.phone.message}</p>}

              <input 
                type="number" 
                className="contactinput" 
                placeholder="Budget" 
                {...register("budget", { required: "Budget is required" })} 
              />
              {errors.budget && <p className="error">{errors.budget.message}</p>}

              <textarea 
                className="contactinput" 
                placeholder="Message" 
                rows="5" 
                {...register("messagecontent", { required: "Message is required" })} 
              ></textarea>
              {errors.messagecontent && <p className="error">{errors.messagecontent.message}</p>}

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
