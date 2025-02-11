import React from "react";
import Teamsec1 from "./Teamsec1";
import Teamsec2 from "./Teamsec2";
import { Helmet } from "react-helmet";
import HomeLast from "../Home/HomeSection/HomeLast";

const Team = () => {
  return (
    <div>
      <Helmet>
        <title>Ekakshar Buildtech Real Estate Agents - Noida Sector 136</title>
        <meta name="title" content="Ekakshar Buildtech Real Estate Agents - Noida Sector 136"/>
        <meta name="description" content="Ekakshar Buildtech – Professional real estate agents in Noida Sector 136, helping you buy, sell, and invest in properties with expert guidance."/>
        <meta name="keywords" content="Ekakshar Buildtech Real Estate Agents, Ekakshar Buildtech Real Estate Broker, Real Estate Agents Noida Sector 136, Real Estate Broker Noida Sector 136, Prime Property in Noida, Prime Property in Delhi NCR"/>
        <link rel="canonical" href="https://ekaksharbuildtech.com/our-team"/>
        <meta name="DC.Title" content="Ekakshar Buildtech Real Estate Agents - Noida Sector 136"/>
        <meta name="DC.Subject" content="Ekakshar Buildtech – Professional real estate agents in Noida Sector 136, helping you buy, sell, and invest in properties with expert guidance."/>
        <meta property="og:title" content="Ekakshar Buildtech Real Estate Agents - Noida Sector 136"/>
        <meta property="og:description" content="Ekakshar Buildtech – Professional real estate agents in Noida Sector 136, helping you buy, sell, and invest in properties with expert guidance."/>
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
      <Teamsec1 />
      <Teamsec2 />
      <HomeLast />
    </div>
  );
};

export default Team;
