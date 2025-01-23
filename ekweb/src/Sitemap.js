import React from "react";
import { Link } from "react-router-dom";

const Sitemap = () => {
  const routes = [
    { path: "/", name: "Home" },
    { path: "/about-us", name: "About Us" },
    { path: "/project", name: "Projects" },
    { path: "/shree-shyam-township", name: "Shree Shyam Township" },
    { path: "/contact-us", name: "Contact Us" },
    { path: "/our-team", name: "Our Team" },
    { path: "/our-blogs", name: "Our Blogs" },
    { path: "/shree-shyam-aerocity", name: "Shree Shyam Aerocity" },
    { path: "/bliss-valley", name: "Bliss Valley" },
    { path: "/ekakshar-green-woods", name: "EKAKSHAR GREEN WOODS" },
    { path: "/ekakshar-green-farms", name: "EKAKSHAR GREEN FARMS" },
    { path: "/faq", name: "FAQ" },
    { path: "/our-ceo", name: "Our CEO" },
    { path: "/our-md", name: "Our MD" },
    { path: "/our-cmd-founder", name: "Our CMD Founder" },
    { path: "/privacystatement", name: "Privacy Statement" },
    { path: "/top-5-real-estate-growth-zones-to-invest-in-delhi-ncr-with-ekakshar-buildtech", name: "Top 5 Real Estate Growth Zones in Delhi NCR" },
    { path: "/discover-16-way-ai-is-making-real-estate-smarter", name: "16 Ways AI is Transforming Real Estate" },
    { path: "/jewar-airport-first-plane-landing-a-milestone-in-aviation-and-infrastructure-development", name: "Jewar Airport First Plane Landing" },
    { path: "/navigating-india-real-estate-market-in-2024-trends-and-insights", name: "India's Real Estate Market 2024 Trends" },
    { path: "/government-policies-driving-dehradun's-real-estate-growth", name: "Dehradun's Real Estate Growth" },
    // Example dynamic route
    { path: "/leader/SUNNY-SINGH", name: "Leader Profile" },
    { path: "/leader/SACHIN-KUMAR", name: "Leader Profile" },
    { path: "/leader/ANKIT-SINGHAL", name: "Leader Profile" },
    { path: "/leader/VINAY-SINGH", name: "Leader Profile" },
    { path: "/leader/SAHIL-CHAHAR", name: "Leader Profile" },
    { path: "/leader/ATIF-NAQUEE", name: "Leader Profile" },
    { path: "/leader/Vastu-shastra-specialist", name: "Leader Profile" },
    { path: "/leader/Accounts-Manager", name: "Leader Profile" },
    { path: "/leader/Hr-Manager", name: "Leader Profile" },
    { path: "/leader/Admin-Manager", name: "Leader Profile" },
    { path: "/leader/Administrator", name: "Leader Profile" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Sitemap</h1>
      <ul>
        {routes.map((route, index) => (
          <li key={index}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sitemap;
