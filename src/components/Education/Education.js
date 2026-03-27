import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import './Education.css';

const Education = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const education = [
    {
      id: 1,
      degree: "B.Tech - Computer Science and Information technology",
      institution: "chameli devi group of institutions",
      year: "2024 - 2028",
    },
    {
      id: 2,
      degree: "Higher Secondary (12th – PCM)",
      institution: "Briliant Academecy",
      year: "2012 - 2024",
    }
  ]
  
  const experience = [
    {
      id: 1,
      role: "Campus Ambassador for GfG",
      Company: "Geeksforgeeks",
      Duration: "6 month",
      Description: "Campus Mantri at GeeksforGeeks – Promoted coding culture, organized events, and built leadership skills.",
    }
  ]

  return (
    <motion.div 
      className="education-container"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="education">
        <h2>Education</h2>
        {education.map((edu, i) => (
          <motion.div 
            key={edu.id} 
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: i * 0.1,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3>{edu.degree}</h3>
            <p>{edu.institution}</p>
            <p>{edu.year}</p>
          </motion.div>
        ))}
      </div>
      
      <div className="experience">
        <h2>Experience</h2>
        {experience.map((exp, i) => (
          <motion.div 
            key={exp.id} 
            className="card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: i * 0.1,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3>{exp.role}</h3>
            <p>{exp.Company}</p>
            <p>{exp.Duration}</p>
            <p>{exp.Description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Education
