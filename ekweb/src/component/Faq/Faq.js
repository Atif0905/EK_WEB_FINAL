import React from "react";
import FaqQuestion from "./FaqQuestion";
import FaqPayment from "./FaqPayment";
import FaqAdvantage from "./FaqAdvantage";
import { Helmet } from "react-helmet";
import './Faqs.css'
import HomeLast from "../Home/HomeSection/HomeLast";

const Faq = () => {
  return (
    <div>
      <Helmet>
        <title>
          FAQ | Top Real Estate Services in Noida by Ekakshar Buildtech
        </title>
        <meta
          name="description"
          content="Get answers to your questions about Ekakshar Buildtech and our top real estate services in Noida. Learn more about our expert offerings."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ekaksharbuildtech.com/faq" />
        
      </Helmet>
      <div className='faq_herodiv background'  style={{ backgroundImage: 'url("/faqheroimg.webp")' }}>
        <div className='d-flex align-item-center justify-content-center'>
        <h1  className='hero_heading_white2 '>Frequently <br/>Asked Questions</h1>
        <div className='backgroundbottomdiv'>Faq</div>
        </div>
    </div>
      {/* <FaqHero /> */}
      <FaqQuestion />
      <FaqPayment />
      <FaqAdvantage />
      <HomeLast />
    </div>
  );
};

export default Faq;
