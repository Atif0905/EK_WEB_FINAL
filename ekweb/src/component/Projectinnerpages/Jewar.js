import React from 'react'
import "./Inner.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import axios from 'axios';
import "../../App.css"
const Jewar = () => {
    const [showModal, setShowModal] = useState(false);
    const [errorModal, setErrorModal] = useState(false);
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      budget: "",
    });
    const [errorMessage, setErrorMessage] = useState("");
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post("https://ekaksharbuildtech.com/HeroConnectForm.php", formData);
        if (response.data.status === "success") { 
          setShowModal(true); 
          e.target.reset(); 
        } else {
          console.error("Error Response Data:", response.data); 
          setErrorModal(true); 
        }
      } catch (error) {
        setErrorMessage(error.response?.data?.message || "An unexpected error occurred.");
        setErrorModal(true);
        console.error("Error Details:", error);
      }    
    };
  return (
    <div>
    <div className='jewarheroback contentbefore'>
        <h3 className='innerherotext'>Jewar</h3>
    </div>
    <div className='container twogrid mt-5'>
    <div className=''>
        <img src='/shreeshyamproject1.png' className='projectimg1' alt=''/>
    </div>
    <div>
        <h3 className='firstprojecthead'>Designing Homes for Today and Tomorrow</h3>
        <p className='aboutext'>This community is more than just buildings; it's a path of creativity, practical solutions, and adapting to the changing real estate landscape. Shri Shyam Township offers options for various needs with careful planning. Whether you desire a peaceful getaway or a thriving investment opportunity, this township provides it all. You can choose plot or farmhouse sizes from 60 square yards to 500 square yards and various sizes for farmhouses. The infrastructure here is nothing short of exceptional, with wide roads, electricity poles lining the streets, and readily available water facilities. Plots are made accessible through interest-free, easy installments under the Jan Kalyan Awasiya Yojana, making property ownership a hassle-free experience.</p>
    </div>
    </div>
    <div className='shyambackcolor mt-5' >
        <h4 className='whitetext'>Shaping Communities One Property at a Time</h4>
        <div className="mobile-swiper container">
          <Swiper
          modules={Autoplay}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false,  }}
          >
            <SwiperSlide><img src='/shyam-projectimg1.png' className='projectswiperimg' alt=''/></SwiperSlide>
            <SwiperSlide><img src='/shyam-projectimg2.png' className='projectswiperimg' alt=''/></SwiperSlide>
            <SwiperSlide><img src='/shyam-projectimg3.png' className='projectswiperimg' alt=''/></SwiperSlide>
          </Swiper>
        </div>
        <div className='threegrid container mt-3'>
            <img src='/shyam-projectimg1.png' className='projectswiperimg' alt=''/>
            <img src='/shyam-projectimg2.png' className='projectswiperimg' alt=''/>
            <img src='/shyam-projectimg3.png' className='projectswiperimg' alt=''/>
        </div>
    </div>
    <div className='blueback'>
    <div className='container'>
        <h3 className='projecthead'>Project Featuring</h3>
    <ul class="custom-list">
  <li>Near Khatu Shyam Temple in Khatoo village, Rajasthan.</li>
  <li>Offers plot and farmhouse sizes ranging from 60 sq. yards to 500 sq. yards, catering to various needs and preferences.</li>
  <li>Features wide roads, electricity poles, and readily available water facilities.</li>
  <li>Interest-free, easy installments under the Jan Kalyan Awasiya Yojana.</li>
  <li>Eco-friendly homes built from natural resources, comfortable and charming living spaces.</li>
  <li>Luxurious living with modern amenities like 50,000 sq. ft. facility with sports courts, swimming pool, and more.</li>
  <li>Commitment to using superior materials and construction practices.</li>
  <li>Spaces designed for social gatherings and community interactions.</li>
</ul>
        </div>
        </div>
        <div className=' mt-3' >
        <h4 className='blacktext'>Special Features</h4>
        <div className="mobile-swiper container">
          <Swiper
          modules={Autoplay}
            spaceBetween={10}
            slidesPerView={2}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false,  }}
          >
            <SwiperSlide><div className="carding">
   <div className="card1" >
    <p className="small">Unique residences built from local natural resources.</p>
    <div className="go-corner" >
      <div className="go-arrow">
        →
      </div>
    </div>
  </div>
</div></SwiperSlide>
            <SwiperSlide><div className="carding">
   <div className="card1" >
    <p className="small">Seamless blend of spirituality and modern living.</p>
    <div className="go-corner" >
      <div className="go-arrow">
        →
      </div>
    </div>
  </div>
</div></SwiperSlide>
            <SwiperSlide><div className="carding">
   <div className="card1" >
    <p className="small">Thoughtfully planned gardens and open spaces.</p>
    <div className="go-corner" >
      <div className="go-arrow">
        →
      </div>
    </div>
  </div>
</div></SwiperSlide>
            <SwiperSlide><div className="carding">
   <div className="card1" > 
    <p className="small">Dedication to creating a safe and beautiful living environment.</p>
    <div className="go-corner" >
      <div className="go-arrow">
        →
      </div>
    </div>
  </div>
</div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className='fourgrid1 container mt-3'>
<div className="carding">
   <div className="card1" >
    <p className="small">Unique residences built from local natural resources.</p>
    <div className="go-corner" >
      <div className="go-arrow">
        →
      </div>
    </div>
  </div>
</div>
<div className="carding">
   <div className="card1" >
    <p className="small">Seamless blend of spirituality and modern living.</p>
    <div className="go-corner" >
      <div className="go-arrow">
        →
      </div>
    </div>
  </div>
</div>
<div className="carding">
   <div className="card1" >
    <p className="small">Thoughtfully planned gardens and open spaces.</p>
    <div className="go-corner" >
      <div className="go-arrow">
        →
      </div>
    </div>
  </div>
</div>
<div className="carding">
   <div className="card1" > 
    <p className="small">Dedication to creating a safe and beautiful living environment.</p>
    <div className="go-corner" >
      <div className="go-arrow">
        →
      </div>
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
            <p>There was an error submitting the form. Please try again.</p>
            <button onClick={closeErrorModal}>Ok</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Jewar