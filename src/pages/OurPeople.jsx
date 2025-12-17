import React from "react";
import "./OurPeople.css";

import Banner from "../assets/about.jpg";
import Person1 from "../assets/about.jpg";
import Person2 from "../assets/about.jpg";
import Team1 from "../assets/about.jpg";
import Team2 from "../assets/about.jpg";
import Team3 from "../assets/about.jpg";
import Team4 from "../assets/men-icon.jpg";


const OurPeople = () => {
  const trustees = [
    {
      name: "Hidayat Khan",
      role: "Managing Trustee",
      image: Team4,
      role: "Managing Trustee",
      description:
        "Hidayat Khan is the visionary leader behind the foundation. He has dedicated his life to improving healthcare access, education, and livelihood opportunities for underserved communities.",
      author: "Mehdi Ahmadi",
      categories: ["Leadership", "Healthcare"],
    },
    {
      name: "Saleha Khan",
      role: "Trustee",
      image: Team4,
      role: "Trustee",
      description:
        "Saleha leads women empowerment and community development initiatives. Her contribution has helped hundreds of women become financially independent.",
      author: "Mehdi Ahmadi",
      categories: ["Women Empowerment", "Community"],
    },
  ];

  const team = [
    {
      name: "Khan Sir",
      role: "Managing Trustee",
      image: Team4,
      role: "",
      description:
        "Khan Sir brings years of experience in social work and has been instrumental in establishing our key programs across rural communities.",
      author: "Mehdi Ahmadi",
      categories: ["Management", "Social Work"],
    },
    {
      name: "Salia Ma'am",
      role: "Trustee",
      image: Team4,
      role: "",
      description:
        "Salia Ma'am specializes in education development and has transformed learning opportunities for thousands of children.",
      author: "Mehdi Ahmadi",
      categories: ["Education", "Development"],
    },
    {
      name: "Upendra",
      role: "Program Advisor",
      image: Team4,
      role: "",
      description:
        "Upendra provides strategic guidance on program implementation and ensures sustainable impact in all our initiatives.",
      author: "Mehdi Ahmadi",
      categories: ["Strategy", "Programs"],
    },
  ];

  return (
    <div className="our-people-page">
      {/* Hero Section */}
      <section className="people-hero">
        <div className="hero-content">
          <h1>Our People</h1>
          <p>
            Meet the dedicated leaders and team members who drive our mission
            forward and create lasting impact in communities.
          </p>
        </div>
      </section>

      {/* Trustees Section */}
      <section className="people-section">
        <div className="container">
          <h2 className="section-title">Our Trustees</h2>

          <div className="people-grid">
            {trustees.map((person, index) => (
              <div className="people-card" key={index}>
                <div className="card-image">
                  <img src={person.image} alt={person.name} />
                </div>
                <div className="card-content">
                  <h3 className="card-title">{person.name}</h3>
                  {/* <p className="card-description">{person.description}</p> */}
                  <p className="card-description">{person.role}</p>
                  <div className="card-meta">
                    {/* <span className="author">Read More</span> */}
                    {/* <span className="separator">|</span>
                    <span className="categories">
                      in {person.categories.join(", ")}
                    </span> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="people-section">
        <div className="container">
          <h2 className="section-title">The Executive Team</h2>

          <div className="people-grid people-grid-3">
            {team.map((person, index) => (
              <div className="people-card" key={index}>
                <div className="card-image">
                  <img src={person.image} alt={person.name} />
                </div>
                <div className="card-content">
                  <h3 className="card-title">{person.name}</h3>
                  {/* <p className="card-description">{person.description}</p> */}
                  <p className="card-description">{person.role}</p>
                  {/* <div className="card-meta">
                    <span className="author">By {person.author}</span>
                    <span className="separator">|</span>
                    <span className="categories">
                      in {person.categories.join(", ")}
                    </span>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurPeople;
