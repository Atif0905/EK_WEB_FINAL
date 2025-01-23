import React from "react";
import { IoArrowUp } from "react-icons/io5";
import "./Blogs.css";

const Blogssec2 = () => {
  return (
    <div className="container_backdiv ">
      <div className="blog_headingsec">
        <div className="blog_text1">
          <div>
            <h1 className="blog_head">THE</h1>
          </div>
          <div>
            <h2 className="blog_head">BLOG</h2>
          </div>
        </div>
      </div>
      <h4 className="recent_post_heading">Recent blog posts</h4>
      <div className="blog_recentdiv1">
        <div>
          <div className="recent_imgdiv">
            <img
              className="recent_imgs"
              src="/blogcardimg1.webp"
              alt="Best Real Estate Agency"
              loading="lazy"
            />
          </div>
          <div className="recent_contentdiv">
            <p className="purple_txt">Ekakshar • 06 Dec 2024</p>
            <div className="d-flex justify-content-between">
              <h4 className="recent_heading1">
                Top 5 Real Estate Growth Zones...
              </h4>
              <IoArrowUp className="blog_arrowicon" />
            </div>
            <p className="main-text">
              Delhi-NCR has usually been a privileged spot for making an
              investment in real property. It gives rewarding opportunities to
              buyers and investors.
            </p>
            <button className="research_purple">
              <a href="/top-5-real-estate-growth-zones-to-invest-in-delhi-ncr-with-ekakshar-buildtech">
                Research
              </a>
            </button>
          </div>
        </div>
        <div className="recent_section">
          <div>
            <img
              className="recent_imgdiv1"
              src="/blogcardimg2.webp"
              alt="Best Real Estate Consultancy"
              loading="lazy"
            />
          </div>
          <div>
            <p className="purple_txt">Ekakshar • 11 Dec 2024</p>
            <h4 className="blog_head11">Discover 16 way is AI making...</h4>
            <p className="main-text">
              The main factor behind the notable advancements in the real...
            </p>
            <button className="research_red">
              <a href="/discover-16-way-ai-is-making-real-estate-smarter">
                Research
              </a>
            </button>
          </div>
          <div>
            <img
              className="recent_imgdiv1"
              src="/blogcardimg4.webp"
              alt="Best Real Estate Agency"
              loading="lazy"
            />
          </div>
          <div>
            <p className="purple_txt">Ekakshar • 16 Dec 2024</p>
            <h4 className="blog_head11">Navigating India's Real Estate...</h4>
            <p className="main-text">
              India's real property industry is thriving as of 2024...
            </p>
            <button className="research_red">
              <a href="/navigating-india-real-estate-market-in-2024-trends-and-insights">
                Research
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="recent_section1 mt-4">
        <div className="recent_imgdiv2">
          <img
            className="recent_imgs"
            src="/blogimgss4.webp"
            alt="Best Real Estate Services"
            loading="lazy"
          />
        </div>
        <div className="recent_contentdiv">
          <p className="purple_txt">Ekakshar • 15 Dec 2024</p>
          <div className="d-flex justify-content-between">
            <h4 className="recent_heading1">
              Jewar Airport's first plane landing...
            </h4>
            <IoArrowUp className="blog_arrowicon" />
          </div>
          <p className="main-text">
            Jewar Airport has made history with its first plane landing,
            bringing a wave of excitement and desire for the area. This isn't
            pretty much an airport; it's about the new possibilities it opens
            for human beings, organizations, and traders.
          </p>
          <button className="research_red">
            <a href="/jewar-airport-first-plane-landing-a-milestone-in-aviation-and-infrastructure-development">
              Research
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogssec2;
