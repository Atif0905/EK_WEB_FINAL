import React, { useState } from 'react';
import './HomeLeader.css';
import emailjs from "emailjs-com";
const HomeLast = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
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
        setFormData({ name: "", email: "", phone: "", messagecontent: "" }); // Reset form fields
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
  return (
    <section className="container_backdiv">
      <div className="homelast_div">
        <div className="human_img_div">
          <img className="human_img" src="/human.webp" alt="Become an Agent." loading="lazy" />
          <div className="homecircle human_circle1" />
        </div>
        <div className="lastdiv2">
          <div className="last">
            <div>
              <h2 className="agent_heading">Become an Agent.</h2>
              <p className="agent_text">Join the best Real Estate Company</p>
            </div>
          </div>
          <div className="last relative">
            <button className="reg_buttn" onClick={handleOpenModal}>
              Register Now
            </button>
            <div className="homecircle human_circle2" />
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-box relative">
            <span className="close-icon" onClick={handleCloseModal}>
              &times;
            </span>
            <div className="form_headdiv">
                    <p className="form_heading mt-3">Connect </p>
                  </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input className="registerinfield mt-3" value={formData.name} onChange={handleChange} name="name" id='name' type="text"  placeholder='Enter Your Name' required />
              </div>
              <div className="form-group">
                <input className="registerinfield" value={formData.phone} onChange={handleChange}  id='phone' type="text" name="phone"  placeholder='Enter Your Phone No'  required />
              </div>
              <div className="form-group">
                <input className="registerinfield" value={formData.email} onChange={handleChange}  id="email" type="email" name="email"  placeholder='Enter Your Email'  required />
              </div>
              <div className="form-group">
                <textarea className="registerinfield" value={formData.messagecontent} onChange={handleChange} name="messagecontent" id="messagecontent"   placeholder='Enter Your Message'  required></textarea>
              </div>
              <button type="submit" className="regbtn">Submit</button>
            </form>
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
      )}
    </section>
  );
};
export default HomeLast;