import React from "react";
import { useNavigate } from "react-router-dom";
import "./AllProject.css";

const allProjects = [
  { title: "Piano", desc: "A polished web experience...", image: "piano.jpg" },
  { title: "Color Gradient", desc: "A vibrant creative build...", image: "color.jpg" },
  { title: "Age Calculator", desc: "A lightweight utility...", image: "/age.svg" },
  { title: "Music App", desc: "A modern music UI...", image: "/music.svg" },
];

const AllProjects = () => {
  const navigate = useNavigate();

  const handleView = (project) => {
    alert(`Viewing project: ${project.title}`);
    // Yaha tum navigate kar sakte ho React Router se
    // Example: navigate(`/projects/${project.title}`)
  };

  return (
    <section className="projects-overlay">
      <div className="projects-header">
        <h1 className="text-white-500">All Projects</h1>
        <button className="exit-btn" onClick={() => navigate("/")}>✕ Exit</button>
      </div>

      <div className="project-list">
        {allProjects.map((p, i) => (
          <div key={i} className="project-card">
            <h2>{p.title}</h2>
            <img src={p.image} alt={p.title} className="project-img" />
            <p>{p.desc}</p>
            <button className="view-btn" onClick={() => handleView(p)}>👁 View Project</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllProjects;
