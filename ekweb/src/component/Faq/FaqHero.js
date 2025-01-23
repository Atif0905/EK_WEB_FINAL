import React from 'react'
import './Faqs.css'
// import faqHeroImg from '../../../public/faqheroimg.webp';


const FaqHero = () => {
  return (
    <div className='faq_herodiv background'  style={{ backgroundImage: 'url("/faqheroimg.webp")' }}>
        <div className='d-flex align-item-center justify-content-center'>
        <h1  className='hero_heading_white2 '>Frequently <br/>Asked Questions</h1>
        <div className='backgroundbottomdiv'>Faq</div>
        </div>
    </div>
  )
}

export default FaqHero