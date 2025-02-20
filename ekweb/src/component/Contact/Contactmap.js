import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa';
import { GrFacebookOption } from "react-icons/gr";
import { RiInstagramFill } from 'react-icons/ri';
const Contactmap = () => {
  return (
    <div className='mt-5'>
      <div className=' center'>
      <div className='conectwithusdiv'>
      <div className='center'><h5 className='main-subheading'>CONNECT WITH US</h5></div>
      <h6 className='getintext'>Follow Us On</h6>
      <div className='center'>
        <a href="https://www.facebook.com/EkaksharBuildtech" target='blank'>
          <GrFacebookOption className='followicon1'/>
        </a>
        <a href="https://www.instagram.com/ekakshar_buildtech/" target='blank'>
          <RiInstagramFill className='followicon1'/>
        </a>
        <a href="https://www.linkedin.com/company/ekaksharbuildtech/" target='blank'>
          <FaLinkedinIn className='followicon1'/>
        </a>
      </div>
      </div>
      </div>
      <div style={{ filter: 'grayscale(80%)' }} className='mt-3'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.0621771148067!2d77.39988777549623!3d28.507776975733137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce923c918038b%3A0x9e141a6839db07f!2sEkakshar%20Buildtech!5e0!3m2!1sen!2sin!4v1739286278678!5m2!1sen!2sin" width="100%" title='map' height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>

    </div>
  )
}

export default Contactmap