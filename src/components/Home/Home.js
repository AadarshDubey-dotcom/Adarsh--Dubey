import React from 'react'
import { motion } from 'framer-motion';
import './Home.css';
import MorphingText from '../MorphingText/MorphingText';
import HoverButton from '../HoverButton/HoverButton'; 
import { useInView } from 'framer-motion'; 

const Home = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <>
    <motion.section 
      id="home" 
      className="home"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="home-content">
        <h1 className="gradient-text">Hi, I'm Adarsh 👋</h1>
        <MorphingText
          texts={[
            "Frontend Developer",
            "React Developer",
            "UI Designer",
          ]}
        />
        <p>
           I build responsive and modern websites using React and JavaScript.
        </p>
        <div className="button">
          <a href="#projects" className="home-link">
            <HoverButton>
              View Project
            </HoverButton>
          </a>
          <a href="#resume" className="home-link">
            <HoverButton>
              Resume
            </HoverButton>
          </a>
        </div>
      </div>
    </motion.section>
    </>
  );
}

export default Home
