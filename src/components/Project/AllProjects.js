import React, { useState } from "react";
import "./AllProject.css";

const allProjects = [
  { title: "Piano", desc: "A polished web experience...", image: "piano.jpg" },
  { title: "Color Gradient", desc: "A vibrant creative build...", image: "color.jpg" },
  { title: "Age Calculator", desc: "A lightweight utility...", image: "age.jpg" },
  { title: "Music App", desc: "A modern music UI...", image: "music.jpg" },
  { title: "Todo List", desc: "Simple task manager...", image: "todo.jpg" }
];

const AllProjects = () => {
  const [open, setOpen] = useState(true);

  if (!open) return null; // Exit button se close ho jayega

  return (
    <section className="projects-overlay">
      <div className="projects-header">
        <h1 className="text-white-500">All Projects</h1>
        <button className="exit-btn" onClick={() => setOpen(false)}>✕ Exit</button>
      </div>

      <div className="project-list">
        {allProjects.map((p, i) => (
          <div key={i} className="project-card">
            <h2>{p.title}</h2>
            <img src={p.image} alt={p.title} className="project-img" />
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllProjects;
