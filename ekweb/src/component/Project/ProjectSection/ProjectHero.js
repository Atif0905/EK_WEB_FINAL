import React, { useEffect, useRef } from 'react';
import './Project.css';

const ProjectHero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  const content = {
    videoSrc: "/projectmain.MOV",
    videoAlt: "Hero Video",
  };

  return (
    <div className='projectbackground-video'>
      <video
        ref={videoRef}
        src={content.videoSrc}
        className='projecthero-video'
        autoPlay
        loop
        muted
      />
      <div className='backgroundbottomdiv'>Projects</div>
    </div>
  );
};

export default ProjectHero;
