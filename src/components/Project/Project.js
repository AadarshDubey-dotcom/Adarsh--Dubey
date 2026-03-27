import React from "react";
import { motion } from "framer-motion";
import { useInView } from 'framer-motion';
import "./Project.css";
import ScrollFloat from "../ScrollFloat/ScrollFloat";
import HoverButton from '../HoverButton/HoverButton';

const projects = [
  {
    title: "Piano",
    desc: "A responsive website built with pure HTML and CSS, showcasing clean design and user-friendly layout.",
    tech: ["HTML", "CSS", "Javascript"],
    image: "/piano.jpg",
    link: "https://lnkd.in/gK2wNuFe",
  },
  {
    title: "color gradient",
    desc: "A creative use of color gradients to bring modern, vibrant visuals to the design.",
    tech: ["JavaScript", "HTML", "CSS"],
    image: "/color.jpg",
    link: "https://lnkd.in/dCeM-aUr",
  },
  {
    title: "Age Calculator",
    desc: "An interactive Age Calculator built with HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "Javascript"],
    image: "/Age - Copy.jpg",
    link: "https://lnkd.in/eSKHFqNP",
  },
];

const Project = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section 
      id="projects" 
      className="projects"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <ScrollFloat>
        My Projects
      </ScrollFloat>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <motion.div 
            className="project-card" 
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: i * 0.1,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.desc}</p>

              <div className="tech">
                {project.tech.map((t, index) => (
                  <span key={index}>{t}</span>
                ))}
              </div>

              <HoverButton link={project.link}>
                View Project →
              </HoverButton>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Project;