import React, { useState } from 'react';
import './Footer.css';
import { FaArrowRight } from 'react-icons/fa6';
import { AiOutlinePhone } from 'react-icons/ai';
import { IoMailOutline } from 'react-icons/io5';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';
import emailjs from "emailjs-com";
const Footer = () => {
  const [formData, setFormData] = useState({ email: "" });
  const [showModal, setShowModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await emailjs.send(
        "service_dc4gxeq",
        "template_pu3449b",
        {
          email: formData.email,
        },
        "V40sIGBn2yzrwC4bv"
      );

      if (response.status === 200) {
        setShowModal(true);
        setFormData({ email: "" });
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
    <footer className='footer_div'>
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
      <div className='footerdiv'>
        <div className='container'>
          <div className='footercontainer'>
            <div className='p-2 mt-2'><a href='/'><img
              src='/bluelogo.webp'
              className='footerimg'
              alt='Ekakshar Buildtech logo'
            /></a>
              <p className='footertext mt-2'>7th Floor, Plot No-59, Riana Perito Tower, Sector-136, Noida, 201305</p>
              <div className='d-flex center1'>
                <AiOutlinePhone className='footericon' />
                <a href="tel:7042005600"><p className='footertext'>7042005600</p></a>
              </div>
              <div className='d-flex center1'>
                <IoMailOutline className='footericon' />
                <a href="mailto:info@ekaksharbuildtech.com"><p className='footertext'>info@ekaksharbuildtech.com</p></a>
              </div>
            </div>

            <div className='p-2 lapview listmargin '>
              <h4 className='footerhead'>Overview</h4>
              <li className='footerlist mt-4'>
                <a href="/">Home</a>
              </li>
              <li className='footerlist'>
                <a href="/about-us">About</a>
              </li>
              <li className='footerlist'>
                <a href="/project">Projects</a>
              </li>
              <li className='footerlist'>
                <a href="/our-team">Teams</a>
              </li>
              <li className='footerlist'>
                <a href="/our-blogs">Blogs</a>
              </li>
              <li className='footerlist '>
                <a href='/faq'>FAQ</a>
              </li>
              <li className='footerlist'>
                <a href='/privacystatement'> Privacy Policy</a>
              </li>
            </div>

            <div className='p-2 lapview listmargin '>
              <h4 className='footerhead'>Quick Links</h4>
              <li className='footerlist mt-4'>
                <a href='/'>Buy Propety With Ekakshar</a>
              </li>
              <li className='footerlist'>
                <a href='/contact-us'> Plots In Sikar Rajasthan</a>
              </li>
              <li className='footerlist'>
                <a href='/shree-shyam-aerocity'> Plots Near Sikar Airport</a>
              </li>
              <li className='footerlist'>
                <a href='/ekakshar-green-farms'> Farms Near Jewar Airport </a>
              </li>
              <li className='footerlist'>
                <a href='/ekakshar-green-woods'> Plots Near Noida Airport </a>
              </li>
              <li className='footerlist'>
                <a href='/bliss-valley'> Plots In Dehradun </a>
              </li>
            </div>

            <div className='p-2 listmargin lapview'>
              <div className='center1'><h4 className='footerhead'>Connect With Us</h4></div>
              <div className='relative mt-5'>
                <form onSubmit={handleSubmit}>
                  <input type='email' id='email' className='footerinput' placeholder='Email Address' name='email' value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>
                  <button type='submit' className='footerbutton' aria-label="Subscribe">
                    <FaArrowRight className='buttonright' />
                  </button>
                </form>
              </div>
              <div className='center1'><h5 className='mt-3'>Follow Us On</h5></div>
              <div className='d-flex center1'>
                <a href="https://www.linkedin.com/company/ekaksharbuildtech/" target='blank'>
                  <FaLinkedinIn className='followicon' />
                </a>
                <a href="https://www.facebook.com/EkaksharBuildtech" target='blank'>
                  <FaFacebookF className='followicon' />
                </a>
                <a href="https://www.instagram.com/ekakshar_buildtech/" target='blank'>
                  <RiInstagramFill className='followicon' />
                </a>
              </div>
            </div>
            <div className='p-2  mobview'>
              <div className='center1'><h4 className='footerhead'>Connect With Us</h4></div>
              <div className='relative mt-3'>
                <input
                  type='email'
                  className='footerinput'
                  placeholder='Email Address'
                  aria-label="Enter your email address"
                />
                <button className='footerbutton' aria-label="Subscribe">
                  <FaArrowRight className='buttonright' />
                </button>
              </div>
              <div className='center1'><h5 className='mt-3'>Follow Us On</h5></div>
              <div className='d-flex center1'>
                <a href="https://www.linkedin.com/company/ekaksharbuildtech/" target='blank'>
                  <FaLinkedinIn className='followicon' />
                </a>
                <a href="https://www.facebook.com/EkaksharBuildtech" target='blank'>
                  <FaFacebookF className='followicon' />
                </a>
                <a href="https://www.instagram.com/ekakshar_buildtech/" target='blank'>
                  <RiInstagramFill className='followicon' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footerdiv2 lapview'>
        <div className=' container'>
          <div className='footercontainer2 container'>
            <div><p className='reservedtext'>© Ekakshar - All rights reserved</p></div>
            <div className='between'><p className='reservedtext'>Terms and Conditions </p><p className='reservedtext'> Privacy Policy</p></div>
          </div>
        </div>
      </div>
      <div className='footerdiv2 mobview'>
        <div className='center1'>
          <div><p className='reservedtext'>© Ekakshar - All rights reserved</p></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
