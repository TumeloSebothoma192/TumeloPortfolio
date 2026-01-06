import React, { useRef, useEffect } from "react";
import "./ProjectsCarousel.css";

export default function ProjectsCarousel() {
  const carouselRef = useRef(null);

  const projects = [
    {
      name: "Tumelo Portfolio",
      repo: "https://github.com/TumeloSebothoma192/TumeloPortfolio",
      image: "/projects/portfolio.jpg",
    },
    {
      name: "Smart Campus API",
      repo: "https://github.com/09Jeanette/smart-campus-api",
      image: "/projects/smart-campus.jpg",
    },
    {
      name: "Dice Roller",
      repo: "https://github.com/TumeloSebothoma192/DiceRoller",
      image: "/projects/dice.jpg",
    },
    {
      name: "Website 3.0",
      repo: "https://github.com/TumeloSebothoma192/Website3.0",
      image: "/projects/Web3.0.png",
    },
  ];

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      // ONLY hijack scroll when cursor is over carousel
      if (!el.matches(":hover")) return;

      e.preventDefault();
      // increase multiplier so scroll feels a bit faster without being jarring
      const speedMultiplier = 2;
      el.scrollLeft += e.deltaY * speedMultiplier;
    };

    el.addEventListener("wheel", handleWheel, { passive: false });

    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <section id="projects" className="projects-section">
      <h2 className="neon-text neon-animate" data-neon="Projects">
        Projects
      </h2>

      <div className="carousel-wrapper">
        <div className="carousel" ref={carouselRef}>
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              className="carousel-card"
              style={{ backgroundImage: `url(${p.image})` }}
            >
              <div className="overlay">
                <h3>{p.name}</h3>
                <span>View on GitHub →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
