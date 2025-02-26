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
import Ekakshargreenwoods from "./component/Projectinnerpages/Ekakshargreenwoods";
import Ekakshargreenfarms from "./component/Projectinnerpages/Ekakshargreenfarms";
import Notfound from "./Notfound";
import "./App.css";
import Keyword from "./component/Keyword/Keyword";
import routeData from "./Routedata.json";
import { Navigate } from "react-router-dom";
const App = (props) => (
  <div className="App">
    <ScrollTop />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/project" element={<Project />} />
      <Route path="/shree-shyam-township" element={<Shreeshyam />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/our-team" element={<Team />} />
      <Route path="/our-blogs" element={<Blogs />} />
      <Route path="/shree-shyam-aerocity" element={<Aerocity />} />
      <Route path="/bliss-valley" element={<BlissValley />} />
      <Route path="/ekakshar-green-woods" element={<Ekakshargreenwoods />} />
      <Route path="/ekakshar-green-farms" element={<Ekakshargreenfarms />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/our-ceo" element={<OurCeo />} />
      <Route path="/our-md" element={<OurMd />} />
      <Route path="/our-cmd-founder" element={<Ourcmd />} />
      <Route path="/leader/:id" element={<Leaders />} />
      <Route path="/privacystatement" element={<PrivacyStatement />} />
      <Route path="/top-5-real-estate-growth-zones-to-invest-in-delhi-ncr-with-ekakshar-buildtech" element={<Blogspage1 />} />
      <Route path="/discover-16-way-ai-is-making-real-estate-smarter" element={<Blogspage2 />} />
      <Route path="/jewar-airport-first-plane-landing-a-milestone-in-aviation-and-infrastructure-development" element={<Blogspage3 />} />
      <Route path="/navigating-india-real-estate-market-in-2024-trends-and-insights" element={<Blogpage4 />} />
      <Route path="/government-policies-driving-dehradun's-real-estate-growth" element={<Blogpage5 />} />
      <Route path="/sitemap" element={<Sitemap />} />
      <Route path="/cir" element={<Cir />} />
        {routeData.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <Keyword
                subhead1={route.subhead1}
                title={route.title}
                description={route.description}
                Keyword={route.Keyword}
                canonical={route.canonical}
                content={route.content}
              />
            }
          />
        ))}
         <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    <Footer />
  </div>
);
const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
