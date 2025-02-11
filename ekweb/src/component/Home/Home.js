import React, { lazy, Suspense, useMemo } from "react";
import { Helmet } from "react-helmet";
import HomeHero from "./HomeSection/HomeHero";

const HomeAbout = lazy(() => import("./HomeSection/HomeAbout"));
const HomeExclusive = lazy(() => import("./HomeSection/HomeExclusive"));
const HomeWhy = lazy(() => import("./HomeSection/HomeWhy"));
const HomeLeader = lazy(() => import("./HomeSection/HomeLeader"));
const HomeBlog = lazy(() => import("./HomeSection/HomeBlog"));
const HomeTestimonial = lazy(() => import("./HomeSection/HomeTestimonial"));
const HomeLast = lazy(() => import("./HomeSection/HomeLast"));

const Home = () => {
  const structuredData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Corporation",
      name: "Ekakshar Buildtech",
      url: "https://ekaksharbuildtech.com/",
      logo: "https://ekaksharbuildtech.com/navlogo.webp",
      address: {
        "@type": "PostalAddress",
        streetAddress: "7th Floor, Plot No-59, Riana Perito Tower , Sector-136",
        addressLocality: "Noida",
        addressRegion: "Uttar Pradesh",
        postalCode: "201305",
        addressCountry: "IN",
      },
      description:
        "Ekakshar Buildtech is a leading real estate company specializing in residential and commercial properties. We prioritize sustainability, innovation, and exceptional service to deliver high-quality projects that blend modern design and functionality.",
      founder: { "@type": "Person", name: "Mr. Rohit Kumar Khari" },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91 70420 05600",
        contactType: "reservations",
        contactOption: "TollFree",
        areaServed: "IN",
        availableLanguage: "en",
      },
      sameAs: [
        "https://www.facebook.com/EkaksharBuildtech",
        "https://www.instagram.com/ekakshar_buildtech/",
        "https://www.linkedin.com/company/ekaksharbuildtech/",
        "https://www.youtube.com/@EkaksharBuildtech/",
        "https://x.com/EkaksharBuilder",
      ],
    }),
    []
  );
  const structuredData1 = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          "position": "1",
          "name": "Ekakshar Buildtech",
          "item": "https://ekaksharbuildtech.com/"
        },
          {
          "@type": "ListItem",
          "position": "2",
          "name": "About",
          "item": "https://ekaksharbuildtech.com/about-us"
        },
          {
          "@type": "ListItem",
          "position": "3",
          "name": "Projects",
          "item": "https://ekaksharbuildtech.com/project"
        }
      ],
    }),
    []
  );
  return (
    <div>
      <Helmet>
        <title>Ekakshar Buildtech Private Limited - Noida Sector 136</title>
        <meta name="title" content="Home | Ekakshar Buildtech" />
        <meta name="title"content="Ekakshar Buildtech Private Limited - Noida Sector 136"/>
        <meta name="description" content="Ekakshar Buildtech Pvt. Ltd. - Trusted real estate developers in Noida Sector 136, delivering quality construction & innovative infrastructure solutions."/>
        <meta name="keywords" content="Ekakshar, Ekakshar Buildtech, Ekakshar Buildtech Pvt Ltd, Ekakshar Buildtech Private Limited, Ekakshar Buildtech Real Estate Firms, Ekakshar Buildtech Real Estate Company, Residential Property in Noida, Commercial Property in Delhi NCR"/>
        <link rel="canonical" href="https://ekaksharbuildtech.com/" />
        <meta name="DC.Title" content="Ekakshar Buildtech Private Limited - Noida Sector 136"/>
        <meta name="DC.Subject" content="Ekakshar Buildtech Pvt. Ltd. - Trusted real estate developers in Noida Sector 136, delivering quality construction & innovative infrastructure solutions."/>
        <meta property="og:title" content="Ekakshar Buildtech Private Limited - Noida Sector 136"/>
        <meta property="og:description" content="Ekakshar Buildtech Pvt. Ltd. - Trusted real estate developers in Noida Sector 136, delivering quality construction & innovative infrastructure solutions." />
        <meta name="author" content="Ekakshar Buildtech" />
        <meta name="owner" content="Ekakshar Buildtech" />
        <meta name="language" content="en-us" />
        <meta name="coverage" content="Global" />
        <meta name="robots" content="INDEX,FOLLOW" />
        <meta name="GOOGLEBOT" content="INDEX, FOLLOW" />
        <meta name="doc-type" content="Webpage" />
        <meta name="revisit-after" content="7 days" />
        <meta property="og:image" content="https://ekaksharbuildtech.com/bluelogo.webp"/>
        <meta property="og:url" content="https://ekaksharbuildtech.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ekakshar Buildtech" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(structuredData1)}
        </script>
      </Helmet>

      <HomeHero />
      <Suspense fallback={<div>Loading...</div>}>
        <HomeAbout />
        <HomeExclusive />
        <HomeWhy />
        <HomeLeader />
        <HomeBlog />
        <HomeTestimonial />
        <HomeLast />
      </Suspense>
    </div>
  );
};

export default Home;
