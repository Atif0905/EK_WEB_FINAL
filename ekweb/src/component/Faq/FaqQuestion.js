import React, { useState } from 'react';
import './Faqs.css'
import data from './Faqs.json'
import { IoIosArrowDropdown } from "react-icons/io";

const FaqQuestion = () => {
  const [visibleAnswerIndex, setVisibleAnswerIndex] = useState(null);

  const toggleAnswer = (index) => {
    setVisibleAnswerIndex(visibleAnswerIndex === index ? null : index);
  };

  return (
    <div className='faqcontainer '>
        <div className='faq_ques_grid'>
          <div>
          <h2 className='main-subheading'>QUESTION/ANSWER</h2>
          <h3 className='faq-subhead'><span className='subheadcolor'>Frequently</span> Asked Question</h3>
            <p className='main-text'>Navigating the real estate landscape can be overwhelming, especially for a first-time buyer, an experienced investor, or a homeowner looking to sell. That is why we have prepared an FAQ section meant to simplify the process for you. Here, you'll find clear, concise answers to common questions about buying, selling, renting, and managing properties. From understanding market trends to decoding legal jargon, we have the insights you need to make informed decisions.</p>
            {data.PopularQuestion.map((NewData, index) => {
              return (
                <div key={index} className='mb-4'>
                  <div className='ques_div' onClick={() => toggleAnswer(index)} style={{cursor:"pointer"}}>
                    <p className='main-text'>{NewData.ques}</p>
                    <IoIosArrowDropdown 
                      className={`arrow_down ${visibleAnswerIndex === index ? 'rotate' : ''}`}
                    />
                  </div>
                  <div className={`ans_div ${visibleAnswerIndex === index ? 'open' : ''}`}>
                    <div className=''>
                    <p className='ans_text'>{NewData.ans}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="faqform_maindiv">
                <form>
                  <div className="form_headdiv">
                    <p className="form_heading mt-3">Any Question? Ask us!!</p>
                  </div>
                  <div className="form_div">
                    <input type="text" className="infield2" placeholder="Name" required />
                    <input type="email" className="infield2" placeholder="E-Mail" required />
                    <input type="tel" className="infield2" placeholder="Number" required />
                    <textarea type="tel" className="infield1" placeholder="Budget" required />
                    <button type="submit" className="regbtn">Register</button>
                  </div>
                </form>
              </div>
        </div>
      </div>
  )
}

export default FaqQuestion;