import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Lenis from "lenis";

import Intro from "./components/Intro/Intro";
import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home/Home';
import About from './components/About/About';
import Skill from './components/Skill/Skill';
import Project from './components/Project/Project';
import Education from './components/Education&Experince/Education';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import AllProjects from './components/Project/AllProjects';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    if (showIntro) return undefined;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (value) => Math.min(1, 1.001 - Math.pow(2, -10 * value)),
      smoothWheel: true,
      touchMultiplier: 1.1,
      anchors: true,
    });

    let animationFrame;
    const raf = (time) => {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    };

    animationFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
    };
  }, [showIntro]);

  return (
    <>
      {showIntro ? (
        <Intro onFinish={() => setShowIntro(false)} />
      ) : (
        <Router>
          <div id="wrapper">
            <div id="content">
              <Routes>
                <Route
                  path="/"
                  element={
                    <motion.div
                      className="main-content"
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 1.2,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                    >
                      <Navbar />
                      <Home />
                      <About />
                      <Skill />
                      <Project />
                      <Education />
                      <Resume />
                      <Contact />
                    </motion.div>
                  }
                />
                <Route path="/all-projects" element={<AllProjects />} />
              </Routes>
            </div>
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
