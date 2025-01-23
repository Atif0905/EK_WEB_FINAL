import React from "react";
import "./Leaders.css";
import HomeLast from "../Home/HomeSection/HomeLast";
import { Helmet } from "react-helmet";

const OurCeo = () => {
  return (
    <div className="leader-top">
      <Helmet>
        <title>Our CEO | Sanjeev Kumar Agarwal - Ekakshar Buildtech.</title>
        <meta
          name="description"
          content="Meet Sanjeev Kumar Agarwal, the Chief Executive Officer of Ekakshar Buildtech Pvt. Ltd., leading innovative real estate development across India."
        />
        <meta
          property="og:title"
          content="Our CEO | Sanjeev Kumar Agarwal - Ekakshar Buildtech."
        />
        <meta name="keywords" content="CEO, Sanjeev Agarwal, Ekaksharbuildtech" />
        <meta
          property="og:description"
          content="Meet Sanjeev Kumar Agarwal, the Chief Executive Officer of Ekakshar Buildtech Pvt. Ltd., leading innovative real estate development across India"
        />
        <meta property="og:image" content="/sanjeev-sir.webp" />
        <meta
          property="og:url"
          content="https://ekaksharbuildtech.com/our-ceo"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ekakshar Buildtech" />

        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://ekaksharbuildtech.com/our-ceo"
        />
      </Helmet>
      <div className="bor-top"></div>
      <h1 className="lead-name">
        Mr. Sanjeev <span class="text-underline">Aggarwal </span>
      </h1>
      <div className="leaderdiv">
        <div className="leadergrid">
          <div className="relative">
            <img src="/ekaksharcircle.webp" className="lettercircle" alt="" />
            <img src="/sanjeev.webp" className="ceoimg" alt="" />
            <div className="ceocircle1"></div>
          </div>

          <div className="quotepadd relative">
            <img className="leaderarrow" src="/leaderarrowimg.webp" alt="hh" />
            <h2 className="qoutetext">
              Every property holds potential to build communities, create{" "}
              <span class="text-underline">opportunities </span>, and leave a
              legacy for future generations.{" "}
            </h2>
            <div className="ceocircle2"></div>
          </div>
        </div>
        <div className="leaderdiv1 relative">
          <p className="main-text-center mt-3">
            Mr. Sanjeev Kumar Agarwal, CEO of Ekakshar Buildtech Pvt. Ltd., has
            over 25 years of expertise in legal, finance, compliance, budgeting,
            and human resources. His deep knowledge of regulatory frameworks and
            financial management ensures that Ekakshar Buildtech remains
            compliant with industry regulations while maintaining financial
            stability. Under his leadership, the company has achieved
            operational efficiency and long-term growth. Mr. Agarwal's ability
            to manage complex legal and financial matters has been key to the
            company's success and expansion. Known for fostering a collaborative
            work culture, he ensures each department functions with precision.
            His strategic vision continues to drive innovation and sustainable
            development in the real estate sector, positioning Ekakshar
            Buildtech for continued success.
          </p>
          <div className="ceocircle3"></div>
        </div>
      </div>
      <div>
        <h3 className="lastname">Mr. Sanjeev Aggarwal</h3>
        <h4 className="lastdesignation">CEO</h4>
      </div>
      <HomeLast />
    </div>
  );
};

export default OurCeo;
