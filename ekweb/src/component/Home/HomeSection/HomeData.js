import React from 'react'
import '../Home.css'
import data from '../Home.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const HomeData = () => {
  return (
    <>
    <div className='data_section'>
    {data.Section1.map((NewData, index) => {
         return(
            <div key={index} className='data_div'>
            <div className='content_div'>
              <div className='num_div'>
              <h5 className='num_head'>{NewData.Num}</h5>
              </div>
              <div className='textdata_div'>
              <p className='text_data mt-4'>{NewData.Text}</p>
              </div>
            </div>
            <div className='hover_div'>
            <div className='textdata_div'>
              <p className='text_data'>{NewData.Text}</p>
              </div>
              <div className='num_div'>
              <h5 className='num_head mt-4'>{NewData.Num}</h5>
              </div>
            </div>
          </div>
          )
        })}
    </div>
    <div className='data_section2'>
    <Swiper
      slidesPerView={4}
      spaceBetween={0}
      modules={[Autoplay]}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      breakpoints={{
        992: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 4,
        },
        0: {
          slidesPerView: 2,
        },
      }}
    >
    {data.Section1.map((NewData, index) => {
         return(
          <SwiperSlide>
            <div key={index} className='data_div'>
            <div className='content_div'>
              <div className='num_div'>
              <h5 className='num_head'>{NewData.Num}</h5>
              </div>
              <div className='textdata_div'>
              <p className='text_data mt-4'>{NewData.Text}</p>
              </div>
            </div>
            <div className='hover_div'>
            <div className='textdata_div'>
              <p className='text_data'>{NewData.Text}</p>
              </div>
              <div className='num_div'>
              <h5 className='num_head mt-4'>{NewData.Num}</h5>
              </div>
            </div>
          </div>
          </SwiperSlide>
          )
        })}
        </Swiper>
    </div>
    </>
  )
}

export default HomeData