import React from 'react'

const RecentProject = () => {
  const content = {
    imageSrc: "/projectimg2.webp",
    imageAlt: "Project",
    heading: "We Turn Keys into Smiles",
    text: " Unlock the door to your dream home with ease. At Ekakshar Buildtech, we go beyond transactions to create lasting memories, ensuring every key you hold leads to a place of comfort, joy, and belonging. Let us help you find a home that makes you smile.",
  };
  const content2 = {
    heading: "The Foundation of Ekakshar Buildtech",
    text: "At Ekakshar Buildtech, we believe that trust is the foundation of every successful relationship, be it with clients, partners, or team members. Being a leading name in the real estate industry, we strive to build not only remarkable structures but also long-lasting relationships, based on integrity and transparency.",
  };
  return (
    <div>
      <div className='projectdiv '>
        <div className='container'>
        <div className='righttextdiv1 '>
          <div className='projectline'></div>
          <h2 className='project-heading mt-3'>{content.heading}</h2>
          <p className='project-text'>{content.text}</p>
        </div>
        </div>
        <div>
          <img src={content.imageSrc} className='projectrightimg' alt={content.imageAlt} loading='lazy'/>
        </div>
      </div>
      <div className='projectlastdiv projectmar'>
        <div className='center'><div className='whiteline'></div></div>
      <h2 className='main-heading-white'>{content2.heading}</h2>
      <p className='main-text-center projectlastext'>{content2.text}</p>
      </div>
    </div>
  )
}

export default RecentProject