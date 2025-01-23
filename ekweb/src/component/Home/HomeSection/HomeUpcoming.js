import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa6";
import { FaTag } from "react-icons/fa";
import '../Home.css';
import data from '../Home.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { FaFlag } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const HomeUpcoming = () => {
  console.log(data.ExclusiveProject); 
  return (
    <div className='upcoming_backdiv'>
      <div className='backdiv'>
        <h2 className='abouthead_white'>Upcoming Projects</h2>
        <p className='subheading_white'>
          Our latest real estate project offers luxury living like never before, with modern design and top-notch amenities in prime locations.
        </p>
        <div className=''>
          <div className=' mt-4'>
            <Swiper
              spaceBetween={20}  
              slidesPerView={3} 
              loop={true} 
              autoplay={{
                delay: 2000,  
                disableOnInteraction: false,  
              }}
              breakpoints={{
                1024: {
                  slidesPerView: 3, 
                },
                768: {
                  slidesPerView: 2,  
                },
                480: {
                  slidesPerView: 1,  // 1 slide on mobile
                },
                320: {
                  slidesPerView: 1,  // Ensure 1 slide on smaller devices
                },
              }}
              modules={[Autoplay]}  
              className="mySwiper"
            >
              {data.UpcomingProject1.map((NewData, index) => (
                <SwiperSlide key={index}>
                  <a href={NewData.link}>
                    <div className='exlapcard1'>
                      <img className='lapeximg' src={NewData.img1} alt='pro' loading='lazy' />
                      <div className='cardheight'><p className='cardname'>{NewData.name}</p>
                      <hr className='homehr' />
                      <div className='between1'>
                        <p className='onrequest'><FaLocationDot />{NewData.address}</p>
                        <p className='cardtype'><FaFlag /> {NewData.type}</p></div>
                      </div>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeUpcoming;
