import React from "react";
import Blogssec1 from "./Blogssec1";
import Blogssec2 from "./Blogssec2";
import { Helmet } from "react-helmet";
import Blogsec3 from "./Blogsec3";

const Blogs = () => {
  return (
    <div>
      <Helmet>
        <title>Ekakshar Buildtech Real Estate Agency - Noida Sector 136</title>
        <meta name="title" content="Ekakshar Buildtech Real Estate Agency - Noida Sector 136"/>
        <meta name="description" content="Ekakshar Buildtech - A trusted real estate agency in Noida Sector 136, offering expert property buying, selling, and investment services."/>
        <meta name="keywords" content="Ekakshar Buildtech Real Estate Agency, Ekakshar Buildtech Real Estate Agencies, Real Estate Agency Noida Sector 136, Real Estate Agencies Noida Sector 136, Commercial Property in Noida, Residential Property in Delhi NCR"/>
        <link rel="canonical" href="https://ekaksharbuildtech.com/our-blogs"/>
        <meta name="DC.Title" content="Ekakshar Buildtech Real Estate Agency - Noida Sector 136"/>
        <meta name="DC.Subject" content="Ekakshar Buildtech - A trusted real estate agency in Noida Sector 136, offering expert property buying, selling, and investment services."/>
        <meta property="og:title" content="Ekakshar Buildtech Real Estate Agency - Noida Sector 136"/>
        <meta property="og:description" content="Ekakshar Buildtech - A trusted real estate agency in Noida Sector 136, offering expert property buying, selling, and investment services."/>
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
      <Blogssec1 />
      <Blogssec2 />
      <Blogsec3/>
    </div>
  );
};

export default Blogs;