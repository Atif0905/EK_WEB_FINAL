import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../Team/Team.json';
import './Leaders.css';
import LeadersLast from './LeadersLast';
import { Helmet } from "react-helmet"
const Leaders = () => {
  const { id } = useParams();
  const leader = data.Leader.find((person) => person.id === id);

  const underlineLastWords = (text) => {
    const words = text.split(' ');
    if (words.length > 3) {
      const lastThreeWords = words.slice(-2).join(' ');
      const restOfText = words.slice(0, -2).join(' ');
      return (
        <>
          {restOfText} <span className="text-underline">{lastThreeWords}</span>
        </>
      );
    }
    const lastWord = words.pop();
    return (
      <>
        {words.join(' ')} <span className="text-underline">{lastWord}</span>
      </>
    );
  };

  return (
    <div className="leader-top">
      <Helmet>
        <title>
          {leader.title}
        </title>
        <meta
          name="description"
          content={leader.description}
        />
        <meta
          property="og:title"
          content={leader.title}
        />
        <meta
          property="og:description"
          content="Get to know the dedicated and experienced team behind Ekakshar Buildtech. Learn about our professionals who are committed to delivering exceptional real estate solutions."
        />
        <meta property="og:image" content="/bluelogo.webp" />
        <meta
          property="og:url"
          content="https://ekaksharbuildtech.com/our-team"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ekakshar Buildtech" />

        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={leader.canonical} />
      </Helmet>
      <div className="bor-top"></div>
      <h1 className="lead-name">{underlineLastWords(leader.head)}</h1>
      <div className="leaderdiv">
        <div className="leadergrid">
          <div className="relative">
            <img src={leader.circleImage} className="lettercircle" alt="" />
            <img src={leader.innerimg} className="ceoimg" alt={leader.name} />
            <div className="ceocircle1"></div>
          </div>
          <div className="quotepadd relative">
            <img
              className="leaderarrow"
              src={leader.arrowImage}
              alt="Arrow"
              loading="lazy"
            />
            <h2 className="qoutetext">{leader.quote}</h2>
            <div className="ceocircle2"></div>
          </div>
        </div>
        <div className="leaderdiv1 relative">
          <p className="main-text-center mt-3">{leader.bio}</p>
          <div className="ceocircle3"></div>
        </div>
      </div>
      <div>
        <h3 className="lastname">
          {leader.head}
        </h3>
        <h4 className="lastdesignation">{leader.txt}</h4>
      </div>
      <LeadersLast />
    </div>
  );
};

export default Leaders;
