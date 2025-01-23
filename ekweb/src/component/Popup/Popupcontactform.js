import React, { useState, useEffect } from "react";
import "./Popup.css";
import { FaWindowClose } from "react-icons/fa";
import 'aos/dist/aos.css';
const Popupcontactform = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    budget: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Enable scroll
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const toggleModal = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send data to backend
    const response = await fetch("https://ekaksharbuildtech.com/form-handler.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Form submitted successfully!");
      setIsOpen(false); 
    } else {
      alert("Error submitting the form. Please try again.");
    }
  };

  return (
    <>
      {isOpen && (
        <div className="modal-overlay" data-aos="fade-down" onClick={toggleModal}>
          <div
            className="modal-container" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modaldiv formgrid bor" >
              <div>
                <img
                  src="./popupcontactimg.jpeg"
                  className="popupimg"
                  alt=""
                />
              </div>
              <div className="container popup_backdiv">
                <div className="popupheading">For Enquiry</div>
                <form className="form" onSubmit={handleSubmit}>
                  <div className="container">
                    <input
                      placeholder="ENTER YOUR NAME"
                      id="name"
                      name="name"
                      type="text"
                      className="input"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <input
                      placeholder="ENTER YOUR E-MAIL"
                      id="email"
                      name="email"
                      type="email"
                      className="input"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <input
                      placeholder="ENTER YOUR NUMBER"
                      id="number"
                      name="number"
                      type="tel"
                      className="input"
                      value={formData.number}
                      onChange={handleChange}
                      required
                    />
                    <input
                      placeholder="ENTER YOUR BUDGET"
                      id="budget"
                      name="budget"
                      type="text"
                      className="input"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit" className="login-button">
                    Submit
                  </button>
                </form>
                <div className="close-modal-button" onClick={toggleModal}>
                  <FaWindowClose />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popupcontactform;
