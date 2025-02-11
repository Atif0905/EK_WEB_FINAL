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
        <title>Ekakshar Buildtech Real Estate Services - Noida Sector 136</title>
        <meta name="title" content="Ekakshar Buildtech Real Estate Services - Noida Sector 136"/>
        <meta name="description" content="Ekakshar Buildtech - Your trusted real estate partner in Noida Sector 136, providing expert property solutions for buying, selling, and investments."/>
        <meta name="keywords" content="Ekakshar Buildtech Real Estate Services, Ekakshar Buildtech Real Estate Consulting, Real Estate Services Noida Sector 136, Real Estate Consulting Noida Sector 136, Luxury Property in Noida, Luxury Property in Delhi NCR"/>
        <link rel="canonical" href="https://ekaksharbuildtech.com/project"/>
        <meta name="DC.Title" content="Ekakshar Buildtech Real Estate Services - Noida Sector 136"/>
        <meta name="DC.Subject" content="Ekakshar Buildtech - Your trusted real estate partner in Noida Sector 136, providing expert property solutions for buying, selling, and investments."/>
        <meta property="og:title" content="Ekakshar Buildtech Real Estate Services - Noida Sector 136"/>
        <meta property="og:description" content="Ekakshar Buildtech - Your trusted real estate partner in Noida Sector 136, providing expert property solutions for buying, selling, and investments."/> 
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
      <ProjectHero />
      <ProjectSection1 />
      <ProjectSection2 />
      <RecentProject />
      {/* <Projects /> */}
    </div>
  );
};

export default Project;
