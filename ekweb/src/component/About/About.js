import React from "react";
import Aboutsec1 from "./Aboutsec1";
import Aboutsec2 from "./Aboutsec2";
import Aboutsec3 from "./Aboutsec3";
import Aboutsec4 from "./Aboutsec4";
import { Helmet } from "react-helmet";
import Aboutleader from "./Aboutleader";
import Homelast from "../Home/HomeSection/HomeLast"
const About = () => {
  return (
    <div>
      <Helmet>
        <title>Ekakshar Buildtech Real Estate Advisor - Noida Sector 136</title>
        <meta name="title" content="Ekakshar Buildtech Real Estate Advisor - Noida Sector 136"/>
        <meta name="description" content="Ekakshar Buildtech – Trusted real estate advisors in Noida Sector 136, offering expert property solutions for buying, selling, and investments."/>
        <meta name="keywords" content="Ekakshar Buildtech Real Estate Advisor, Ekakshar Buildtech Real Estate Consultancy, Real Estate Advisor Noida Sector 136, Real Estate Consultancy Noida Sector 136, Property in Noida, Property in Delhi NCR"/>
        <link rel="canonical" href="https://ekaksharbuildtech.com/about-us"/>
        <meta name="DC.Title" content="Ekakshar Buildtech Real Estate Advisor - Noida Sector 136"/>
        <meta name="DC.Subject" content="Ekakshar Buildtech – Trusted real estate advisors in Noida Sector 136, offering expert property solutions for buying, selling, and investments."/>
        <meta property="og:title" content="Ekakshar Buildtech Real Estate Advisor - Noida Sector 136"/>
        <meta property="og:description" content="Ekakshar Buildtech – Trusted real estate advisors in Noida Sector 136, offering expert property solutions for buying, selling, and investments."/>
        <meta name="author" content="Ekakshar Buildtech"/>
        <meta name="owner" content="Ekakshar Buildtech"/>
        <meta name="language" content="en-us"/>
        <meta name="coverage" content="Global"/>
        <meta name="robots" content="INDEX,FOLLOW"/>
        <meta name="GOOGLEBOT" content="INDEX, FOLLOW"/>
        <meta name="doc-type" content="Webpage"/>
        <meta name="revisit-after" content="7 days"/>
        <meta property="og:image" content="/bluelogo.webp" />
      </Helmet>
      <Aboutsec1 />
      <Aboutsec2 />
       <Aboutsec3 />
      <Aboutsec4 />
      <Aboutleader/>
      <Homelast/>
    </div>
  );
};

export default About;
