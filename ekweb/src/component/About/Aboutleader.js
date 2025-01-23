import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

const leaderData = [
  {
    imgSrc: '/circleimgrohitsir.webp',
    name: 'Mr. Rohit Kumar Khari',
    designation: 'Founder & CMD'
  },
  {
    imgSrc: '/sanjeev-circle.webp',
    name: 'Mr. Sanjeev Aggarwal',
    designation: 'CEO'
  },
  {
    imgSrc: '/deepak-cicle.webp',
    name: 'Mr. Deepak Sharma',
    designation: 'MD'
  },
  {
    imgSrc: '/circlesunny.webp',
    name: 'Mr. Sunny Singh',
    designation: 'Director'
  },
  {
    imgSrc: '/circleSachin-Sir.webp',
    name: 'Mr. Sachin Kumar',
    designation: 'Director'
  },
  {
    imgSrc: '/vinay-circle.webp',
    name: 'Mr. Vinay Singh',
    designation: 'Director'
  },
  {
    imgSrc: '/circlesahil.webp',
    name: 'Mr. Sahil Chahar',
    designation: 'IT Professionals'
  },
  {
    imgSrc: '/circleatif.webp',
    name: 'Mr. Atif Naquee',
    designation: 'IT Professionals'
  },
  {
    imgSrc: '/circleguruji.webp',
    name: 'Shri Nivas Shastri Pandit Ji',
    designation: 'Vastu Shastra Specialist'
  },
  {
    imgSrc: '/circlemansi.webp',
    name: 'Miss Mansi Chauhan',
    designation: 'Accounts Manager'
  },
  {
    imgSrc: '/circletannu.webp',
    name: 'Miss Tannu Gupta',
    designation: 'HR Manager'
  },
  {
    imgSrc: '/circleswati.webp',
    name: 'Miss Swati Singh',
    designation: 'Admin Manager'
  },
];

const Aboutleader = () => {
  return (
    <div className='mt-4 container'>
      <div className='center'><h5 className='main-subheading'>INTRODUCE YOURSELF TO</h5></div>
      <div className='center'><h2 className='main-heading'>Our Leaders</h2></div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {leaderData.map((leader, index) => (
          <SwiperSlide key={index}>
            <div className='mt-3'>
              <div className='center'><img
                src={leader.imgSrc}
                className="about-leader-img"
                alt={leader.name}
              /></div>
              <h3 className="leader-name">{leader.name}</h3>
              <h5 className="leader-designation">{leader.designation}</h5>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='center mt-3'><a href='/our-team'><button className='abtbutton'>Meet Our Team</button></a></div>
    </div>
  );
};

export default Aboutleader;