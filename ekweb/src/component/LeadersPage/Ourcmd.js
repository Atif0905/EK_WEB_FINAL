import React from "react";
import "./Leaders.css";
import HomeLast from "../Home/HomeSection/HomeLast";
import { Helmet } from "react-helmet";

const Ourcmd = () => {
  return (
    <div className="leader-top">
      <Helmet>
        <title>Our CMD & Founder | Ekakshar Buildtech Pvt. Ltd.</title>
        <meta
          name="description"
          content="Learn about Mr. Rohit Kumar Khari, the visionary Founder and CMD of Ekakshar Buildtech Pvt. Ltd., leading real estate development with trust and innovation in India."
        />
        <meta
          property="og:title"
          content="Our CMD & Founder | Ekakshar Buildtech Pvt. Ltd."
        />
        <meta name="keywords" content="CMD, Rohit Khari, Ekaksharbuildtech" />
        <meta
          property="og:description"
          content="Learn about Mr. Rohit Kumar Khari, the visionary Founder and CMD of Ekakshar Buildtech Pvt. Ltd., leading real estate development with trust and innovation in India."
        />
        <meta property="og:image" content="/Rohitsirimg.webp" />
        <meta
          property="og:url"
          content="https://ekaksharbuildtech.com/our-cmd-founder"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ekakshar Buildtech" />

        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://ekaksharbuildtech.com/our-cmd-founder"
        />
      </Helmet>
      <div className="bor-top"></div>
      <h1 className="lead-name">
        Mr. Rohit <span class="text-underline">Kumar Khari</span>
      </h1>
      <div className="leaderdiv">
        <div className="leadergrid">
          <div className="relative">
            <img src="/ekaksharcircle.webp" className="lettercircle" alt="" />
            <img src="/rohitsir.webp" className="ceoimg" alt="" />
            <div className="ceocircle1"></div>
          </div>

          <div className="quotepadd relative">
            <img
              class="leaderarrow"
              src="/leaderarrowimg.webp"
              alt="hh"
              loading="lazy"
            />
            <h2 className="qoutetext">
              Real estate isn't just about buildings; it's about building
              dreams, securing futures, and creating{" "}
              <span class="text-underline">legacies</span>—one property at a
              time.
            </h2>
            <div className="ceocircle2"></div>
          </div>
        </div>
        <div className="leaderdiv1 relative">
          <p className="main-text-center mt-3">
            Born in Meerut in August 1990, Rohit Kumar Khari is a well-known
            personality in the real estate sector and the founder of Ekakshar
            Buildtech Pvt. Ltd.. Mr. R K started his career with reputed
            builder's in 2013 after completing his degree in Mechanical
            Engineering, and he remained there until 2017. He laid the
            groundwork for his future business endeavours here by gaining
            priceless experience and knowledge of the real estate industry. An
            important milestone in Mr. R K career was reached in 2022 when he
            started his first solo project in Khatu Shyam Ji, Rajasthan. As the
            founder of Ekakshar Buildtech Pvt. Ltd., he has been instrumental in
            planning and executing major development projects, including Aero
            City in Rajasthan, and large-scale ventures in Dehradun, Ayodhya,
            Noida Extension, and Ranikhet. Mr. R K is known for his relentless
            work ethic, visionary leadership, and dedication to excellence. His
            ability to inspire his team, coupled with his strategic foresight,
            has made him a respected leader in the real estate sector,
            constantly pushing boundaries to shape the future of urban
            development.
          </p>
          <div className="ceocircle3"></div>
        </div>
      </div>
      <div>
        <h3 className="lastname">Mr. Rohit Kumar Khari</h3>
        <h4 className="lastdesignation">CMD & Founder</h4>
      </div>
      <HomeLast />
    </div>
  );
};

export default Ourcmd;
