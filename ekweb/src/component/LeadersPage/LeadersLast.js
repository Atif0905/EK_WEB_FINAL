import React, { useState } from 'react';

const LeadersLast = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  return (
    <section className="container_backdiv">
      <div className="homelast_div">
        <div className="human_img_div">
          <img className="human_img" src="/human.webp" alt="Channel Partner" loading="lazy" />
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
            <form action="./Channelform.php" method="post">
              <div className="form-group">
                <input className="registerinfield mt-3" id='name' type="text" name="name" placeholder='Enter Your Name' required />
              </div>
              <div className="form-group">
                <input className="registerinfield" id='phone' type="text" name="phone"  placeholder='Enter Your Phone No'  required />
              </div>
              <div className="form-group">
                <input className="registerinfield" id="email" type="email" name="email"  placeholder='Enter Your Email'  required />
              </div>
              <div className="form-group">
                <textarea className="registerinfield" id="message" name="message"  placeholder='Enter Your Message'  required></textarea>
              </div>
              <button type="submit" className="regbtn">Submit</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
export default LeadersLast;