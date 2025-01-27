import React from 'react';
import './Project.css';

const ProjectSection1 = () => {
  const content = {
    imageSrc: "/projectimg1.webp",
    imageAlt: "Project",
    heading: "You Are in Good Hands",
    text: "Trust, expertise, and care define our approach. With Ekakshar Buildtech, your real estate journey is guided by professionals who prioritize your needs, ensuring every decision leads to your success and satisfaction. Rest assured, you're in capable and reliable hands.."
  };

  return (
    <div>
      <div className='projectdiv mt-4'>
        <div>
          <img src={content.imageSrc} className='projectleftimg' alt={content.imageAlt} loading='lazy'/>
        </div>
        <div className='container'>
        <div className='righttextdiv '>
          <div className='projectline'></div>
          <h1 className='project-heading mt-3'>{content.heading}</h1>
          <p className='project-text-right'>{content.text}</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection1;
