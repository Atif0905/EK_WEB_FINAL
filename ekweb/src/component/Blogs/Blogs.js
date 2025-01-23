import React from "react";
import Blogssec1 from "./Blogssec1";
import Blogssec2 from "./Blogssec2";
import { Helmet } from "react-helmet";
import Blogsec3 from "./Blogsec3";

const Blogs = () => {
  return (
    <div>
      <Helmet>
        <title>Blog | Insights from the Best Real Estate Company in Delhi NCR</title>
        <meta name="description" content="Read blogs from Ekakshar Buildtech, the best real estate company in Delhi NCR, for expert insights and updates on the real estate market."
        />
       <meta property="og:title" content="Ekakshar Buildtech Blog | Insights on Real Estate and Property Trends" />
        <meta property="og:description" content="Stay updated with Ekakshar Buildtech's blog, offering expert insights, tips, and the latest trends in the real estate market. Explore valuable information to guide your property decisions." />
        <meta property="og:image" content="/bluelogo.webp" />
        <meta property="og:url" content="https://ekaksharbuildtech.com/our-blogs" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ekakshar Buildtech" />
         <meta name="robots" content="index, follow"/>
         <link rel="canonical" href="https://ekaksharbuildtech.com/our-blogs" />
      </Helmet>
      <Blogssec1 />
      <Blogssec2 />
      <Blogsec3/>
    </div>
  );
};

export default Blogs;