import React from 'react';
import { motion, useInView } from 'framer-motion';
import './About.css';
import TiltedCard from '../ui/TiltedCard';
import AboutCard from '../AboutCard/AboutCard';

const highlightWords = ['clean', 'responsive', 'user-friendly', 'enjoyable'];

const About = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  React.useEffect(() => {
    if (typeof window !== 'undefined' && !window.IntersectionObserver) {
      window.IntersectionObserver = class {
        observe() {}
        disconnect() {}
        unobserve() {}
      };
    }
  }, []);

  return (
    <section id="about" className="about-section" ref={ref}>
  <div className="about-left">
    <div className="about-card">
      <section className="about-card-content">
        <h1>ADARSH DUBEY</h1>
        <AboutCard /> 
      </section>
      <motion.p
        className="about-copy"
        initial={{ opacity: 0, y: 16, filter: 'blur(10px)' }}
        animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 16, filter: 'blur(10px)' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        Hi, I&apos;m Adarsh — a frontend developer from India who loves building{' '}
        {highlightWords.map((word, index) => (
          <motion.span
            key={word}
            className="about-highlight"
            initial={{ opacity: 0, y: 10, filter: 'blur(10px)' }}
            animate={isInView ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 10, filter: 'blur(10px)' }}
            transition={{ duration: 0.45, delay: index * 0.12 + 0.2, ease: 'easeOut' }}
          >
            {index > 0 ? ' ' : ''}
            {word}
          </motion.span>
        ))}{' '}
        web apps. I specialize in React, focusing on interfaces that feel simple
        but work great. Always learning, always building. My goal is to build
        interfaces that are not just functional, but genuinely enjoyable to use.
      </motion.p>
    </div>
  </div>

  <div className="about-right">
    <div className="flex gap-6 mt-8">
        <TiltedCard
          imageSrc="/harsh.png"
          altText="Adarsh Dubey"
          captionText="Adarsh Dubey"
          containerHeight="250px"
          containerWidth="250px"
          imageHeight="250px"
          imageWidth="250px"
          rotateAmplitude={12}
          scaleOnHover={1.05}
          showTooltip
          overlayContent={
            <div className="overlay-content">
              <p>Hi, I&apos;m Adarsh!</p>
            </div>
          }
        />
      </div>
  </div>
</section>

  );
};

export default About;
