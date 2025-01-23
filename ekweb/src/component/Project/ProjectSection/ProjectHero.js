import React from 'react';
import '../Project.css';

const ProjectHero = () => {
  const content = {
    videoSrc: "/projectmain.MOV",
    videoAlt: "Hero Video",
  };

  return (
    <div className=' background-video'>
      <video
        src={content.videoSrc}
        className='hero-video'
        alt={content.videoAlt}
        autoPlay
        loop
        muted
      />
      <div className='backgroundbottomdiv'>Projects</div>
    </div>
  );
};

export default ProjectHero;
