import React from "react";
import "./Portfolio.css";
import Projects from "../components/Projects";
export default function Portfolio({}) {
  const projects = [
    {
      name: "Kode Keeper",
      description: "App for holding snippets of code.",
      id: 1,
      link: "https://github.com/Saml415/Kode-Keeper",
      image: "https://saml415.github.io/portfolio/assets/images/Kode.PNG",
    },
    {
      name: "Studio Ghibli Companion App",
      description:
        "App for allowing users to track and find movies by Studio Ghibli.",
      id: 2,
      link: "https://github.com/LemonPocky/ghibli-app",
      image: "https://saml415.github.io/portfolio/assets/images/Kode.PNG",
    },
    {
      name: "Tech-Blog",
      description: "Forum site for posting tech related content",
      id: 3,
      link: "https://github.com/Saml415/tech-blog",
      image: "https://saml415.github.io/portfolio/assets/images/Kode.PNG",
    },
    {
      name: "E-Commerce Back-end",
      description: "Backend program for an e-commerce site",
      id: 4,
      link: "hhttps://github.com/Saml415/e-commerce",
      image: "https://saml415.github.io/portfolio/assets/images/Kode.PNG",
    },
    {
      name: "Weather Forecast App",
      description:
        "App for looking up weather forecasts from a third-party API",
      id: 5,
      link: "https://github.com/Saml415/weather-app",
      image: "https://saml415.github.io/portfolio/assets/images/Kode.PNG",
    },
    {
      name: "Budget Tracker",
      description:
        "PWA created to keep track of transactions both on and offline.",
      id: 6,
      link: "https://github.com/Saml415/budget-tracker",
      image: "https://saml415.github.io/portfolio/assets/images/Kode.PNG",
    },
  ];

  return (
    <div className="portcontainer">
      {projects.map((card) => (
        <Projects
          className="card"
          name={card.name}
          description={card.description}
          key={card.id}
          link={card.link}
        />
      ))}
    </div>
  );
}
