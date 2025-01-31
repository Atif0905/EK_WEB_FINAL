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
    () => (  {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "About Us",
          "item": "https://ekaksharbuildtech.com/about-us"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Contact",
          "item": "https://ekaksharbuildtech.com/Contact"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Blogs",
          "item": "https://ekaksharbuildtech.com/our-blogs"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Shree Shyam Aerocity",
          "item": "https://ekaksharbuildtech.com/shree-shyam-aerocity"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Shree Shyam Township",
          "item": "https://ekaksharbuildtech.com/shree-shyam-township"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Bliss Valley",
          "item": "https://ekaksharbuildtech.com/bliss-valley"
        }
      ]
    }),
    []
  );
  return (
    <div>
      <Helmet>
        <title> Ekakshar Buildtech | Best Real Estate Services </title>
        <meta name="title" content="Home | Ekakshar Buildtech" />
        <meta
          name="description"
          content="Ekakshar Buildtech offers reliable real estate services in Noida, specializing in buying, selling, and renting properties. Expert guidance for seamless deals!"
        />
        <meta
          name="keywords"
          content="Property in India, Real Estate India, Best Real Estate company in Noida , Properties In India, Property For Sale, Real Estate services in Noida , Buy Property In India, Commercial Property in India, Property for Best Real estate agency , Ekakshar Buildtech"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ekaksharbuildtech.com/" />

        <meta
          property="og:title"
          content="Ekakshar Buildtech | Best Real Estate Services"
        />
        <meta
          property="og:description"
          content="Ekakshar Buildtech offers reliable real estate services in Noida, specializing in buying, selling, and renting properties. Expert guidance for seamless deals!"
        />
        <meta
          property="og:image"
          content="https://ekaksharbuildtech.com/bluelogo.webp"
        />
        <meta property="og:url" content="https://ekaksharbuildtech.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ekakshar Buildtech" />

        {/* Structured Data (JSON-LD) */}
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
