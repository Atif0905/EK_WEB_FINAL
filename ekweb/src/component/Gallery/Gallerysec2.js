import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import './Gallery.css'; // Your custom styles

const images = [
  'eventsimg1.png',
  'eventsimg2.png',
  'eventsimg1.png',
  'eventsimg2.png',
  'eventsimg1.png',
  'eventsimg2.png',
  'eventsimg1.png',
  'eventsimg2.png',
  'eventsimg1.png',
  'eventsimg2.png',
  'eventsimg1.png',
  'eventsimg2.png',
  'eventsimg1.png',
];

const Gallerysec2 = () => {
  return (
    <div className="aa">
      <Swiper
        modules={[Autoplay]} // Add modules here
        slidesPerView={5}
        spaceBetween={30}
        centeredSlides={true}
        loop={true} // Enable loop
        autoplay={{ delay: 3000 }} // Enable autoplay with a delay
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className={`custom-slide ${index === 2 ? 'highlighted' : ''}`}>
            <img
              src={image}
              alt={`Slide ${index}`}
              className={index === 2 ? 'bigger-image' : ''} // Add class for larger image
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallerysec2;