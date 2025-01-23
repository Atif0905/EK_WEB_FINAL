import React from "react";
import Teamsec1 from "./Teamsec1";
import Teamsec2 from "./Teamsec2";
import { Helmet } from "react-helmet";
import HomeLast from "../Home/HomeSection/HomeLast";

const Team = () => {
  return (
    <div>
      <Helmet>
        <title>
          Team |Best Real Estate Consultancy Experts at Ekakshar Buildtech
        </title>
        <meta
          name="description"
          content="Meet Ekakshar Buildtech's team, the best real estate consultancy in Noida, dedicated to top service and quality in every project."
        />
        <meta
          property="og:title"
          content="Meet Our Team | Ekakshar Buildtech | Real Estate Experts"
        />
        <meta
          property="og:description"
          content="Get to know the dedicated and experienced team behind Ekakshar Buildtech. Learn about our professionals who are committed to delivering exceptional real estate solutions."
        />
        <meta property="og:image" content="/bluelogo.webp" />
        <meta
          property="og:url"
          content="https://ekaksharbuildtech.com/our-team"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ekakshar Buildtech" />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ekaksharbuildtech.com/our-team" />
      </Helmet>
      <Teamsec1 />
      <Teamsec2 />
      <HomeLast />
    </div>
  );
};

export default Team;
