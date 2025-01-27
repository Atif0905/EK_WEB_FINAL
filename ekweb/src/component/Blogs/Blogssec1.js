import React from 'react'
import "./Blogs.css"
const Blogssec1 = () => {
  const content = {
    videoSrc: "/blog-hero-video.mp4",
    videoAlt: "Ekakshar Buildtech Blogs",
  };
  return (
    <div className=' blogbackground-video'>
    <video
      src={content.videoSrc}
      className='bloghero-video'
      alt={content.videoAlt}
      autoPlay
      loop
      muted
    />
    <div className='backgroundbottomdiv'>Blogs</div>
  </div>
  )
}

export default Blogssec1