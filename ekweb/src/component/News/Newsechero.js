import React from 'react'
import "../Blogs/Blogs.css"
import { FaCalendarAlt } from "react-icons/fa";
import { FaTag } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
const Newsechero = () => {
  return (
    <div>
    <div className='newsheroback'>
    <h1 className='aboutherotext'>News</h1>
    </div>
    <div className='container'>
        <h2 className='abouthead1 mt-3'>News</h2>
        <div className='leaderlapview'>
    <div className='blogsgrid  mt-3'>
    <div className='blogscard '>
      <div className='blogoverlay'>
        <img src='./News-Home.webp' className='blogsimg' alt=''/>
        <div className='d-flex'><p className='blogdatetext'><FaCalendarAlt className='blogicon'/> 06-09-2024 | </p> <p className='blogdatetext'><FaTag className='blogicon'/> Ekakshar Buildtech</p></div>
        <h5>A Guide to Success with Agile...</h5>
        {/* <a>Continue Reading</a> */}
        </div>
    </div>
    <div className='blogscard'>
    <div className='blogoverlay'>
        <img src='./News-Home2.webp' className='blogsimg' alt=''/>
        <div className='d-flex'><p className='blogdatetext'><FaCalendarAlt className='blogicon'/> 30-08-2024 | </p><p className='blogdatetext'><FaTag className='blogicon'/> Ekakshar Buildtech</p></div>
        <h5>Real Estate investment strategies</h5>
        {/* <a>Continue Reading</a> */}
        </div>
    </div>
    <div className='blogscard'>
    <div className='blogoverlay'>
        <img src='./News-Home3.webp' className='blogsimg' alt=''/>
        <div className='d-flex'><p className='blogdatetext'><FaCalendarAlt className='blogicon'/> 16-08-2024 | </p><p className='blogdatetext'><FaTag className='blogicon'/> Ekakshar Buildtech</p></div>
        <h5>Nurturing Minds for a Brighter Future</h5>
        {/* <a>Continue Reading</a> */}
        </div>
    </div>
    </div>
    </div>
    <div className='exclusivemobview'>
    <Swiper
          modules={Autoplay}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false,  }}
          >
            
    <SwiperSlide><div className='blogscard '>
      <div className='blogoverlay'>
        <img src='./News-Home.webp' className='blogsimg' alt=''/>
        <div className='d-flex'><p className='blogdatetext'><FaCalendarAlt className='blogicon'/> 06-09-2024 | </p> <p className='blogdatetext'><FaTag className='blogicon'/> Ekakshar Buildtech</p></div>
        <h5>A Guide to Success with Agile...</h5>
        {/* <a>Continue Reading</a> */}
        </div>
    </div></SwiperSlide>
    <SwiperSlide><div className='blogscard'>
    <div className='blogoverlay'>
        <img src='./Blogsimg2.webp' className='blogsimg' alt=''/>
        <div className='d-flex'><p className='blogdatetext'><FaCalendarAlt className='blogicon'/> 30-08-2024 | </p><p className='blogdatetext'><FaTag className='blogicon'/> Ekakshar Buildtech</p></div>
        <h5>Real Estate investment strategies</h5>
        {/* <a>Continue Reading</a> */}
        </div>
    </div></SwiperSlide>
    <SwiperSlide><div className='blogscard'>
    <div className='blogoverlay'>
        <img src='./News-Home.webp' className='blogsimg' alt=''/>
        <div className='d-flex'><p className='blogdatetext'><FaCalendarAlt className='blogicon'/> 16-08-2024 | </p><p className='blogdatetext'><FaTag className='blogicon'/> Ekakshar Buildtech</p></div>
        <h5>Nurturing Minds for a Brighter Future</h5>
        {/* <a>Continue Reading</a> */}
        </div>
    </div></SwiperSlide>
          </Swiper>
    </div>
    </div>
    </div>
  )
}

export default Newsechero