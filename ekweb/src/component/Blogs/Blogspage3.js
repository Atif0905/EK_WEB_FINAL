import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./Blogs.css";
import { IoIosArrowRoundUp } from "react-icons/io";
import data from "./Blog.json";

const Blogspage3 = () => {
  const [showAll, setShowAll] = useState(false);
  const initialCount = 3;

  const blogs = data.RecentBlog;

  const displayedBlogs = showAll ? blogs : blogs.slice(0, initialCount);
  return (
    <div className="blogpagetop relative">
      <Helmet>
        <title>Jewar Airport’s First Landing: A Milestone in Aviation</title>
        <meta
          name="description"
          content="Witness Jewar Airport’s first plane landing, a milestone in aviation and infrastructure, boosting opportunities to buy plot in Jewar"
        />
        <meta
          property="og:title"
          content="Jewar Airport’s First Landing: A Milestone in Aviation
"
        />
        <meta
          property="og:description"
          content="Witness Jewar Airport’s first plane landing, a milestone in aviation and infrastructure, boosting opportunities to buy plot in Jewar."
        />
        <meta
          property="og:image"
          content="/blogpageimg3.webp"
        />
        <meta
          property="og:url"
          content="https://ekaksharbuildtech.com/Jewar-Airport’s-First-Plane-Landing-A-Milestone-in-Aviation-and-Infrastructure-Development"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ekakshar Buildtech" />
        <meta property="og:locale" content="en_US" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://ekaksharbuildtech.com/Jewar-Airport’s-First-Plane-Landing-A-Milestone-in-Aviation-and-Infrastructure-Development"
        />
        <meta
          name="keywords"
          content="real estate services, best real estate company, best real estate services, Premium properties in Jewar, best real estate agency, real estate agency, buy plot in jewar, best property in jewar"
        />
      </Helmet>
      <div className="container_backdiv">
        <div className="blogpage_grid">
          <div className="blogpage_section1">
            <a href="/our-blogs">
              <p className="blog_back">Back</p>
            </a>
            <h1 className="blogpage_heading">
              {" "}
              Jewar Airport’s First Plane Landing: A Milestone in Aviation and
              Infrastructure Development
            </h1>
            <p className="ekakshar_text">By Ekakshar</p>
            <p className="blogpage_date">December 15, 2024</p>
            <div>
              <img
                className="blogpage_imgdiv1"
                src="/blogpageimg3.webp"
                alt="Best Real Estate Company"
                loading="lazy"
              />
            </div>
            <div>
              <p className="main-text mt-3">
                Jewar Airport has made history with its first plane landing on 09 dec 2024,
                bringing a wave of excitement and desire for the area. This
                isn’t pretty much an airport; it’s about the new possibilities
                it opens for human beings, organizations, and traders.
              </p>
              <h2 className="blogpage_subheading mt-2">
                A Long-Awaited Dream Comes True{" "}
              </h2>
              <p className="main-text mt-2">
                Jewar Airport, referred to as Noida International Airport, has
                been in improvement for years. Situated in Uttar Pradesh, the
                airport will help reduce the load on Delhi’s Indira Gandhi
                International Airport and characteristic a key hub for northern
                India. Designed with modern facilities, it’s set to be a big
                boost for the community economy.
              </p>

              <p className="main-text mt-2">
                The first touchdown is the result of difficult work via
                engineers, planners, and officers. It indicates that the airport
                is prepared to attach human beings through domestic and
                worldwide flights, paving the manner for financial boom and
                improvement.
              </p>

              <h2 className="blogpage_subheading">
                Real estate opportunities around Jewar Airport{" "}
              </h2>
              <p className="main-text">
                The opening of the airport has created a mystery in the real
                estate market. Many people are looking to invest in this area
                because of its top-notch potential. If you are wondering, now is
                a good time to{" "}
                <b className="blog_bold">
                  <a href="/">buy plot near Jewar Airport.</a>
                </b>{" "}
                Asset costs tend to push higher in the short term. Making it a
                smart investment for the future.
              </p>

              <p className="main-text mt-2">
                {" "}
                Projects such as subway expansion, expressways and business
                zones are also undergoing reform. This results in a surplus in
                the neighborhood and increased fees. Whether you plan to build a
                home or spend money on commercial real estate. This is a golden
                opportunity.
              </p>

              <h2 className="blogpage_subheading">
                Transforming the future of Uttar Pradesh{" "}
              </h2>
              <p className="main-text mt-2">
                Jewar Airport is bigger than any aviation company. Considered a
                major turning point for Uttar Pradesh, the country now holds a
                prominent position in the Indian aviation industry. and ready to
                attract companies in logistics Tourism and manufacturing: Better
                connectivity will create jobs. add changes and better position
                the state on the world stage.
              </p>

              <h2 className="blogpage_subheading">Why Invest Now? </h2>
              <p className="main-text mt-2">
                The first aircraft touchdown is proof that Jewar Airport is now
                not a plan—it’s occurring. Living or investing close to an
                airport comes with many blessings, like higher travel options
                and growing property values. Buy plots near Jewar Airport now,
                you could steady your future and experience brilliant returns,
                whether you’re building a home or a enterprise.
              </p>

              <h2 className="blogpage_subheading"> Conclusion </h2>
              <p className="main-text mt-2">
                Jewar Airport’s first plane landing is a milestone that
                represents development and possibilities. It’s set to pressure
                growth, create jobs, and enhance actual property values for
                years yet to come. Don’t miss the chance{" "}
                <b className="blog_bold">
                  <a href="/"> buy plots near Jewar Airport </a>
                </b>
                and be a part of this interesting journey in the direction of a
                brighter future.
              </p>
            </div>
          </div>
          <div className="sticky_div">
            <div>
              <h4 className="blogpage_heading2">You May Also Like This </h4>
              <div>
                {data.RecentBlog.slice(0, 5).map((NewData, index) => {
                  if (index === 2) {
                    return null; // Skip index 2
                  }
                  return (
                    <a href={NewData.link}>
                      <div key={index} className="recent_blogcard">
                        <img
                          className="recent_blogimg"
                          src={NewData.img}
                          alt="Best Real Estate Agency"
                          loading="lazy"
                        />
                        <div className="recent_contentdiv1">
                          <p className="purple_txt">
                            Ekakshar • {NewData.date}
                          </p>
                          <div className="d-flex justify-content-between">
                            <h4 className="blog_head11">{NewData.name}</h4>
                            <IoIosArrowRoundUp className="blogpage_arrow" />
                          </div>
                          <p className="main-text">{NewData.description}</p>
                          <button className="research_purple">Research</button>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <h4 className="recentblog_heading">Recent Blog</h4>
        <div className="recent_blog_grid">
          {displayedBlogs.map((NewData, index) => {
            return (
              <a href={NewData.link}>
                <div key={index} className="recent_blogcard">
                  <img
                    className="recent_blogimg"
                    src={NewData.img}
                    alt="Best Real Estate Services"
                    loading="lazy"
                  />
                  <div className="recent_contentdiv1">
                    <p className="purple_txt">Ekakshar • {NewData.date}</p>
                    <div className="d-flex justify-content-between">
                      <h4 className="blog_head11">{NewData.name}</h4>
                      <IoIosArrowRoundUp className="blogpage_arrow" />
                    </div>
                    <p className="main-text">{NewData.description}</p>
                    <button className="research_purple">Research</button>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
        <div onClick={() => setShowAll(!showAll)}>
          <p className="blog_view_btn">
            {" "}
            {showAll ? "View Less" : "View More"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogspage3;
