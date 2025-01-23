import React from "react";
import ProjectHero from "./ProjectSection/ProjectHero";
import ProjectSection1 from "./ProjectSection/ProjectSection1";
import RecentProject from "./ProjectSection/RecentProject";
import ProjectSection2 from "./ProjectSection/ProjectSection2";
import { Helmet } from "react-helmet";


const Project = () => {
  return (
    <div>
      <Helmet>
        <title>Ekakshar Buildtech Projects | Best Real Estate Agency in Noida</title>
        <meta
          name="description"
          content="Explore Ekakshar Buildtech's projects, showcasing the best real estate agency's premium residential and commercial properties."
        />
       <meta property="og:title" content="Ekakshar Buildtech Projects | Showcasing Our Real Estate Excellence" />
        <meta property="og:description" content="Explore Ekakshar Buildtech's completed and ongoing real estate projects. Discover our commitment to quality, innovation, and exceptional living spaces." />
        <meta property="og:image" content="/bluelogo.webp" />
        <meta property="og:url" content="https://ekaksharbuildtech.com/project" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ekakshar Buildtech" />
         <meta name="robots" content="index, follow"/>
         <link rel="canonical" href="https://ekaksharbuildtech.com/project" />
         <meta name="keywords" content="Shree Shyam Township, Shree Shyam Aerocity, Bliss Valley, Best Real Estate company , Best Real Estate Agency, Best Property in Khatu Shyam, Best Property in Dehradhun" />
      </Helmet>
      <ProjectHero />
      <ProjectSection1 />
      <ProjectSection2 />
      <RecentProject />
      {/* <Projects /> */}
    </div>
  );
};

export default Project;
