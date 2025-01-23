// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import ScrollTop from "./ScrollTop";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Project from "./component/Project/Project";
import Contact from "./component/Contact/Contact";
import Shreeshyam from "./component/Projectinnerpages/Shreeshyam";
import Aerocity from "./component/Projectinnerpages/Aerocity";
import BlissValley from "./component/Projectinnerpages/BlissValley";
import Faq from "./component/Faq/Faq";
import PrivacyStatement from "./Privacy/PrivacyStatement";
import Team from "./component/Team/Team";
import Blogs from "./component/Blogs/Blogs";
import Blogspage1 from "./component/Blogs/Blogspage1";
import Blogspage2 from "./component/Blogs/Blogspage2";
import Blogspage3 from "./component/Blogs/Blogspage3";
import Blogpage4 from "./component/Blogs/Blogpage4";
import Blogpage5 from "./component/Blogs/Blogpage5";
import OurCeo from "./component/LeadersPage/OurCeo";
import Ourcmd from "./component/LeadersPage/Ourcmd";
import OurMd from "./component/LeadersPage/OurMd";
import Leaders from "./component/LeadersPage/Leaders";
import Sitemap from "./Sitemap";
import Cir from "./cir";
import "./App.css"
import Ekakshargreenwoods from "./component/Projectinnerpages/Ekakshargreenwoods";
import Ekakshargreenfarms from "./component/Projectinnerpages/Ekakshargreenfarms";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about-us", element: <About /> },
  { path: "/project", element: <Project /> },
  { path: "/shree-shyam-township", element: <Shreeshyam /> },
  { path: "/contact-us", element: <Contact /> },
  { path: "/our-team", element: <Team /> },
  { path: "/our-blogs", element: <Blogs /> },
  { path: "/shree-shyam-aerocity", element: <Aerocity /> },
  { path: "/bliss-valley", element: <BlissValley /> },
  {path:  "/ekakshar-green-woods", element: <Ekakshargreenwoods/>},
  { path: "/ekakshar-green-farms", element: <Ekakshargreenfarms/>},
  { path: "/faq", element: <Faq /> },
  { path: "/our-ceo", element: <OurCeo /> },
  { path: "/our-md", element: <OurMd /> },
  { path: "/our-cmd-founder", element: <Ourcmd /> },
  { path: "/leader/:id", element: <Leaders /> },
  { path: "/privacystatement", element: <PrivacyStatement /> },
  { path: "/top-5-real-estate-growth-zones-to-invest-in-delhi-ncr-with-ekakshar-buildtech", element: <Blogspage1 /> },
  { path: "/discover-16-way-ai-is-making-real-estate-smarter", element: <Blogspage2 /> },
  { path: "/jewar-airport-first-plane-landing-a-milestone-in-aviation-and-infrastructure-development", element: <Blogspage3 /> },
  { path: "/navigating-india-real-estate-market-in-2024-trends-and-insights", element: <Blogpage4 /> },
  { path: "/government-policies-driving-dehradun's-real-estate-growth", element: <Blogpage5 /> },
  { path: "/sitemap", element: <Sitemap /> },
  {path:"/cir", element: <Cir/>}
];

const App = () => {

  return (
    <div className="App">
      <ScrollTop />
      <Navbar />
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
