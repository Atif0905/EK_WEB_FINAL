import React from "react";
import "./Leaders.css";
import HomeLast from "../Home/HomeSection/HomeLast";
import { Helmet } from "react-helmet";

const OurMd = () => {
  return (
    <div className="leader-top">
      <Helmet>
        <title>Our Managing Director | Deepak Sharma - Ekakshar Buildtech.</title>
        <meta
          name="description"
          content="Meet Deepak Sharma, the Managing Director of Ekakshar Buildtech Pvt. Ltd., steering innovative real estate development projects across India. "
        />
        <meta
          property="og:title"
          content="Our MD  | Ekakshar Buildtech Pvt. Ltd."
        />
        <meta name="keywords" content="MD, Deepak Sharma, Ekaksharbuildtech" />
        <meta
          property="og:description"
          content="Meet Deepak Sharma, the Managing Director of Ekakshar Buildtech Pvt. Ltd., steering innovative real estate development projects across India."
        />
        <meta property="og:image" content="/Deepak-Sharma.webp" />
        <meta
          property="og:url"
          content="https://ekaksharbuildtech.com/our-md"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ekakshar Buildtech" />

        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://ekaksharbuildtech.com/our-md"
        />
      </Helmet>
      <div className="bor-top"></div>
      <h1 className="lead-name">
        Mr. Deepak <span class="text-underline">Sharma </span>
      </h1>
      <div className="leaderdiv">
        <div className="leadergrid">
          <div className="relative">
            <img src="/ekaksharcircle.webp" className="lettercircle" alt="" />
            <img src="/deepak.webp" className="ceoimg" alt="" />
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
              Real estate's true beauty lies not in structure, but in the{" "}
              <span class="text-underline">dreams</span> and futures it helps
              realize.
            </h2>
            <div className="ceocircle2"></div>
          </div>
        </div>
        <div className="leaderdiv1 relative">
          <p className="main-text-center mt-3">
            Mr. Deepak Sharma, with over 15 years of experience in the real
            estate sector, plays a pivotal role in land procurement for Ekakshar
            Buildtech Pvt. Ltd. His personal land bank in Greater Noida and
            expertise in land acquisitions enable him to identify key
            development opportunities, driving the company's growth into new
            markets. Mr. Sharma's strategic approach ensures a steady supply of
            prime real estate for future projects, contributing significantly to
            the company's expansion plans. His deep understanding of the real
            estate landscape and commitment to sourcing valuable land assets
            make him a crucial part of Ekakshar Buildtech's success. His efforts
            continue to shape the company's growth and position it as a leader
          </p>
          <div className="ceocircle3"></div>
        </div>
      </div>
      <div>
        <h3 className="lastname">Mr. Deepkaj Sharma</h3>
        <h4 className="lastdesignation">MD</h4>
      </div>
      <HomeLast />
    </div>
  );
};

export default OurMd;
