import React, { useState, useEffect, useRef } from "react";
import "./Blogs.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const Blogsec3 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const blogsRef = useRef(null); // Create a ref for the "All blog posts" section

  const blogs = [
    {
      imgSrc: "/blogcardimg5.webp",
      author: "Ekakshar",
      date: "20 Dec 2024",
      title: "Government Policies Driving... ",
      description:
        "Dehradun, the picturesque capital of Uttarakhand, is quickly turning...",
      link: "/government-policies-driving-dehradun's-real-estate-growth",
    },
    {
      imgSrc: "/blogcardimg4.webp",
      author: "Ekakshar",
      date: "16 Dec 2024",
      title: "Navigating India's Real Estate... ",
      description: "India's real property industry is thriving as of 2024...",
      link: "/navigating-india-real-estate-market-in-2024-trends-and-insights",
    },
    {
      imgSrc: "/blogcardimg3.webp",
      author: "Ekakshar",
      date: "15 December 2024",
      title: "Jewar Airport's first plane...",
      description:
        "Jewar Airport has made history with its first plane landing...",
      link: "/jewar-airport-first-plane-landing-a-milestone-in-aviation-and-infrastructure-development",
    },
    {
      imgSrc: "/blogcardimg2.webp",
      author: "Ekakshar",
      date: "11 December 2024",
      title: "Discover 16 way is AI making...",
      description:
        "The main factor behind the notable advancements in the real...",
      link: "/discover-16-way-ai-is-making-real-estate-smarter",
    },
    {
      imgSrc: "/blogcardimg1.webp",
      author: "Ekakshar",
      date: "06 Dec 2024",
      title: "Top 5 Real Estate Growth Zones...",
      description: "Delhi-NCR has usually been a privileged spot for making...",
      link: "/top-5-real-estate-growth-zones-to-invest-in-delhi-ncr-with-ekakshar-buildtech",
    },
  ];

  const totalPages = Math.ceil(blogs.length / itemsPerPage);
  const currentBlogs = blogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      if (blogsRef.current) {
        blogsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth <= 768 ? 3 : 6);
    };

    updateItemsPerPage(); // Set on initial render
    window.addEventListener("resize", updateItemsPerPage);

    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  return (
    <div className="container_backdiv" ref={blogsRef}>
      <h4 className="recent_post_heading">All blog posts</h4>
      <div className="blog_grid_section">
        {currentBlogs.map((blog, index) => (
          <a href={blog.link}><div key={index} className="blogcard_div">
            <img src={blog.imgSrc} alt={blog.title} className="blogcardimg" />
            <div>
              <p className="purple_txt mt-4">{`${blog.author} • ${blog.date}`}</p>
              <h4 className="blogcard_head">{blog.title}</h4>
              <p className="main-text">{blog.description}</p>
              <button className="research_purple">
                Research
              </button>
            </div>
          </div></a>
        ))}
      </div>
      <hr />
      <div className="pagination between">
        <button
          className="next_button"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <FaArrowLeftLong /> Previous
        </button>
        <div className="center">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`page_button ${currentPage === i + 1 ? "active" : ""}`}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <button
          className="next_button"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default Blogsec3;
