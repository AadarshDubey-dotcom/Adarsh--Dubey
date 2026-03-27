import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import './Resume.css'
import ScrollFloat from "../ScrollFloat/ScrollFloat";
import HoverButton from '../HoverButton/HoverButton';

const Resume = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section 
      id="resume" 
      className="resume"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <ScrollFloat>My Resume</ScrollFloat>
      <div className="resume-content">
        <div className="resume-left">
          <p className="resume-desc">
            Download my resume to explore my skills, projects, and experience in detail.
          </p>
          <div className="resume-button">
            <HoverButton link="/Adarsh_Dubey_Resume.pdf" download>
            Download Resume
            </HoverButton>
            <HoverButton link="/Adarsh_Dubey_Resume.pdf" outline>
            View Resume
            </HoverButton>
          </div>
        </div>
        <div className="resume-right">
          <div className="resume-card">
            <iframe src="/Adarsh_Dubey_Resume.pdf" title="resume"></iframe>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Resume
