import React from "react";
import "./Contact.css";
import Contactform from "./Contactform";
import Contactmap from "./Contactmap";
import { Helmet } from "react-helmet";
import HomeLast from "../Home/HomeSection/HomeLast";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Us | Real Estate Services & Support</title>
        <meta
          name="description"
          content="Contact us for top real estate services and support. Our team is ready to assist with any inquiries or questions you have."
        />
         <meta property="og:title" content="Contact Us | Ekakshar Buildtech | Real Estate Experts" />
        <meta property="og:description" content="Get in touch with Ekakshar Buildtech for inquiries, support, or more information about our real estate projects. We’re here to assist you with all your property needs." />
        <meta property="og:image" content="/bluelogo.webp" />
        <meta property="og:url" content="https://ekaksharbuildtech.com/Contact" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ekakshar Buildtech" />
         <meta name="robots" content="index, follow"/>
         <link rel="canonical" href="https://ekaksharbuildtech.com/contact-us" />
      </Helmet>
      <div className='contactherosec background'>
    <h1 className='hero_heading_white1'>Get in touch.</h1>
    <div className='backgroundbottomdiv'>Contact Us</div>
    </div>

      <Contactform />
      <Contactmap />
      <HomeLast/>
    </div>
  );
};

export default Contact;
