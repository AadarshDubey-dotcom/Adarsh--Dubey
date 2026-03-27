import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import './About.css';
import ScrollFloat from "../ScrollFloat/ScrollFloat";
import BlurText from '../BlurText';

const About = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.section 
      id="about" 
      className="about"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <ScrollFloat>
        About Me
      </ScrollFloat>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        Hi, I'm Adarsh, a frontend developer from India with a strong passion for building responsive, user-friendly, and visually engaging web applications. I specialize in React and modern web technologies, focusing on creating clean, interactive, and efficient digital experiences that provide real value to users. I enjoy transforming ideas into scalable and well-structured interfaces while paying close attention to design and performance. I'm constantly learning new tools, improving my skills, and exploring innovative ways to build better web applications that combine functionality with great user experience.
      </motion.p>
    </motion.section>
  )
}

export default About
