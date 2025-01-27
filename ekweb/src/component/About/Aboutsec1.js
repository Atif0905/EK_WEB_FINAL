import React from 'react'
import './About.css'
const Aboutsec1 = () => {
  const content = {
    videoSrc: "/about-hero-video.mp4",
    videoAlt: "Hero Video",
  };
  return (
    <div className=' aboutbackground-video'>
    <video
      src={content.videoSrc}
      className='abouthero-video'
      alt={content.videoAlt}
      autoPlay
      loop
      muted
    />
    <div className='backgroundbottomdiv'>About</div>
  </div>
  )
}

export default Aboutsec1