import React from 'react'
import { motion } from 'framer-motion';
import './Home.css';
import RotatingText from '../RotatingText/RotatingText';
import HoverButton from '../HoverButton/HoverButton'; 
import { useInView } from 'framer-motion'; 
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';
import Hero from '../Hero/Hero';
import { SmoothCursor } from "../lightswind/smooth-cursor";

const Home = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <>
    <SmoothCursor 
      color="white"
      size={20}
      glowEffect={true}
      showTrail={false}
      rotateOnMove={true}
      scaleOnClick={true}
    />
    <motion.section 
      id="home" 
      className="home"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="home-wrapper">
        <div className="home-left">
          <h1 className="gradient-text">Hi, I'm Adarsh 👋</h1>
          <RotatingText
            texts={[
              "Frontend Developer",
              "React Developer", 
              "UI Designer",
            ]}
            mainClassName="rotating-text"
            splitBy="words"
            staggerFrom="first"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            staggerDuration={0.1}
            transition={{ type: "tween", duration: 0.6, ease: "easeInOut" }}
            rotationInterval={2500}
          />
          <p>
             I build fast, responsive and modern web applications <br /> with React, Javascript,and Tailwind CSS. 
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
          <div className="connect-with-me">
            <p className="connect-text">Connect with me</p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/adarsh-dubey-12qwas/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                <FaLinkedin />
              </a>
              <a href="https://github.com/AadarshDubey-dotcom" target="_blank" rel="noopener noreferrer" className="social-link github">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/aabhishe.kt/" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                <FaInstagram />
              </a>
              <a href="mailto:dubeyadarsh74396@gmail.com" className="social-link email">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
        <div className="home-right">
          <Hero />
        </div>
      </div>
    </motion.section>
    </>
  );
}

export default Home
