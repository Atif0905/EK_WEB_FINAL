import React, { useState } from 'react';
import './Faqs.css';
import data from './Faqs.json';
import { IoIosArrowDropdown } from "react-icons/io";

const FaqPayment = () => {
  const [visibleAnswerIndex, setVisibleAnswerIndex] = useState(null);

  const toggleAnswer = (index) => {
    setVisibleAnswerIndex(visibleAnswerIndex === index ? null : index);
  };

  return (
    <div className='faqcontainer1 '>
    <div className='faq_ques_grid1'>
      <div className='relative'>
      <img src='/faqimg1.webp' className='firstfaqimg' alt=''/>
      <div className='imageupperdiv'>
        <img src='/whitearrow.webp' className='arrowimg' alt=''/>
      <h4 className='faqdivheading'>Give us a chance to prove it !!</h4>
      <p className='faqdivtext'>Allow us the opportunity to demonstrate our dedication and expertise. With unwavering commitment and tailored solutions, we aim to turn your real estate aspirations into a seamless and rewarding experience.</p>
      </div>
      </div>
      <div>
      <h3 className='faq-subhead'><span className='subheadcolor'>Payment</span> Question</h3>
        {data.PaymentQuestion1.map((NewData, index) => {
          return (
            <div key={index} className='mt-4 mb-4'>
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
    </div>
  </div>
  );
};

export default FaqPayment;