import React from 'react'
import "./About.css"
const Aboutsec2 = () => {
  return (
    <div className='container'>
    <div className='homeabout_div '>
      <div className='centerend'><img src='/rohitsirimg.jpeg' className='aboutfirstimg ' alt='Mr. Rohit Kumar Khari'/></div>
      <div className='about-content-div'>
        <h1 className='main-subheading mt-3'>INTRODUCE YOURSELF TO</h1>
        <h2 className='main-heading mt-3'>Our CMD & Founder</h2>
        <div className=' paddright'><p className='main-text'>Mr. Rohit Kumar Khari is a well-known personality in the real estate sector and the founder of Ekakshar Buildtech Pvt. Ltd. Mr. R K started his career with reputed builder in 2013 after completing his degree in Mechanical Engineering, and he remained there until 2017.</p></div>
        <div className='nameheading'>Mr. Rohit Kumar Khari</div>
        <p className='designationtext'>CMD & Founder</p>
        <a href='/our-cmd-founder'><button className='abtbutton mt-1'>Read more</button></a>
        </div>
    </div>
    </div>
  )
}

export default Aboutsec2