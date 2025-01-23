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
        <title>About Ekakshar Buildtech | Best Real Estate Company</title>
        <meta name="description" content="Discover who we are at Ekakshar Buildtech. As the best real estate company in Noida, we offer premium properties and uphold quality and transparency."/>
        <meta property="og:title" content="About Ekakshar Buildtech | Leading Real Estate Experts" />
        <meta property="og:description" content="Learn more about Ekakshar Buildtech, a premier real estate company dedicated to providing exceptional property solutions and services. Discover our mission, values, and team." />
        <meta property="og:image" content="/bluelogo.webp" />
        <meta property="og:url" content="https://ekaksharbuildtech.com/about-us" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ekakshar Buildtech" />
        <meta name="robots" content="index, follow"/>
        <link rel="canonical" href="https://ekaksharbuildtech.com/about-us" />
      </Helmet>
      <Aboutsec1 />
      <Aboutsec2 />
       <Aboutsec3 />
      <Aboutsec4 />
      <Aboutleader/>
      <Homelast/>
      {/* <div className="mt-3"><HomeExclusive /></div> */}
    </div>
  );
};

export default About;
