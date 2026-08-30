import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";

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

  return (
    <>
      {showIntro ? (
        <Intro onFinish={() => setShowIntro(false)} />
      ) : (
        <Router>
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
        </Router>
      )}
    </>
  );
}

export default App;
