import React from "react";
import { Link } from "react-router-dom";
import "./Project.css";

const projects = [
  { title: "Piano", desc: "A polished web experience...", image: "piano.jpg" },
  { title: "Color Gradient", desc: "A vibrant creative build...", image: "color.jpg" },
  { title: "Age Calculator", desc: "A lightweight utility...", image: "age.jpg" }
];

const Project = () => {
  return (
    <section id="projects" className="projects">
      <h1 className="color-white">Work</h1>
      <div className="scroll-box-horizontal">
        <div className="scroll-content-horizontal">
          {projects.map((p, i) => (
            <div key={i} className="project-card">
              <h2 className="text-white">{p.title}</h2>
              <img src={p.image} alt={p.title} className="project-img" />
              <p>{p.desc}</p>
            </div>
          ))}
          {projects.map((p, i) => (
            <div key={`dup-${i}`} className="project-card">
              <h2>{p.title}</h2>
              <img src={p.image} alt={p.title} className="project-img" />
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Button to new page */}
      <Link to="/all-projects" className="see-all-btn">
        See All Work →
      </Link>
    </section>
  );
};

export default Project;
