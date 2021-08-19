import React from "react";
import "./Portfolio.css";
import Projects from "../components/Projects";
export default function Portfolio({}) {
  const projects = [
    {
      name: "Kode Keeper",
      description: "App for holding snippets of code",
      id: 1,
      link: "https://github.com/Saml415/Kode-Keeper",
    },
    {
      name: "Studio Ghibli Companion App",
      description: "App for holding snippets of code",
      id: 2,
      link: "https://github.com/Saml415/Kode-Keeper",
    },
    {
      name: "Studio Ghibli Companion App",
      description: "App for holding snippets of code",
      id: 3,
      link: "https://github.com/Saml415/Kode-Keeper",
    },
    {
      name: "Studio Ghibli Companion App",
      description: "App for holding snippets of code",
      id: 4,
      link: "https://github.com/Saml415/Kode-Keeper",
    },
    {
      name: "Studio Ghibli Companion App",
      description: "App for holding snippets of code",
      id: 5,
      link: "https://github.com/Saml415/Kode-Keeper",
    },
    {
      name: "Studio Ghibli Companion App",
      description: "App for holding snippets of code",
      id: 6,
      link: "https://github.com/Saml415/Kode-Keeper",
    },
  ];

  return (
    <div className="container">
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
